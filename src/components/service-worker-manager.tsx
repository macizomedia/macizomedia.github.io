"use client"

import { useEffect } from "react"

export default function ServiceWorkerManager() {
  useEffect(() => {
    // Clear any existing service workers in development
    if (process.env.NODE_ENV === 'development' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(regs => {
        regs.forEach(reg => {
          console.log('Unregistering service worker:', reg.scope)
          reg.unregister()
        })
      })
    }

    // Register service worker only in production
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration.scope)
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error)
        })
    }
  }, [])

  return null
}
