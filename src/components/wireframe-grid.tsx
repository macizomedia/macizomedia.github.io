"use client"

import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const noise = (x: number, y: number, seed: number = 0) => {
  const n = Math.sin((x + seed) * 12.9898 + (y + seed * 0.7) * 78.233 + seed * 37.719) * 43758.5453
  return (n - Math.floor(n)) * 2 - 1
}

const smoothNoise = (x: number, y: number, seed: number = 0) => {
  const corners = (noise(x - 1, y - 1, seed) + noise(x + 1, y - 1, seed) + noise(x - 1, y + 1, seed) + noise(x + 1, y + 1, seed)) / 16
  const sides = (noise(x - 1, y, seed) + noise(x + 1, y, seed) + noise(x, y - 1, seed) + noise(x, y + 1, seed)) / 8
  const center = noise(x, y, seed) / 4
  return corners + sides + center
}

const interpolatedNoise = (x: number, y: number, seed: number = 0) => {
  const intX = Math.floor(x)
  const fracX = x - intX
  const intY = Math.floor(y)
  const fracY = y - intY
  const smoothX = (1 - Math.cos(fracX * Math.PI)) / 2
  const smoothY = (1 - Math.cos(fracY * Math.PI)) / 2
  const v1 = smoothNoise(intX, intY, seed)
  const v2 = smoothNoise(intX + 1, intY, seed)
  const v3 = smoothNoise(intX, intY + 1, seed)
  const v4 = smoothNoise(intX + 1, intY + 1, seed)
  const i1 = v1 * (1 - smoothX) + v2 * smoothX
  const i2 = v3 * (1 - smoothX) + v4 * smoothX
  return i1 * (1 - smoothY) + i2 * smoothY
}

const fractalNoise = (x: number, y: number, octaves: number = 6, seed: number = 0) => {
  let value = 0
  let amplitude = 1
  let frequency = 0.1
  let maxValue = 0

  for (let i = 0; i < octaves; i++) {
    value += interpolatedNoise(x * frequency, y * frequency, seed + i * 100) * amplitude
    maxValue += amplitude
    amplitude *= 0.5
    frequency *= 2
  }

  return value / maxValue
}

const circularGradient = (x: number, y: number, radius: number = 16) => {
  const distance = Math.sqrt(x * x + y * y)
  return Math.max(0, 1 - (distance / radius))
}

function WireframePlane() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Create the geometry with vertices for the wireframe
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(32, 22, 56, 40)
    const vertices = geo.attributes.position.array as Float32Array

    // Apply fractal noise with circular gradient control
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i]
      const y = vertices[i + 1]
      
      // Generate layered fractal noise for organic terrain
      const baseNoise = fractalNoise(x, y, 10, 10)
      const detailNoise = fractalNoise(x, y, 4, 100) * 0.9
      const microNoise = fractalNoise(x, y, 2, 200) * 0.25
      
      // Combine different noise layers
      const combinedNoise = baseNoise + detailNoise + microNoise
      
      // Apply circular gradient to control intensity from center
      const gradient = circularGradient(x, y, 68)
      const heightMultiplier = gradient * gradient // Square for smooth falloff
      
      const height = combinedNoise * heightMultiplier * 9.0

      vertices[i + 2] = height
    }

    geo.attributes.position.needsUpdate = true
    geo.computeVertexNormals()
    return geo
  }, [])

  // Create wireframe material using Tech Mono colors
  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: 0xA6A5A4, // tech-mono-1 in hex
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
  }, [])

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      rotation={[-Math.PI * 0.2, 0, 0]}
      position={[0, -1, 0]}
    />
  )
}

function Scene() {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.3} />
      
      {/* Directional light for depth */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      
      {/* The wireframe plane */}
      <WireframePlane />
    </>
  )
}

export function WireframeGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full bg-transparent">
        {/* Placeholder while Three.js loads */}
      </div>
    )
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{
          position: [0, 6, 12],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
