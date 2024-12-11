// Import RxJS components from the global RxJS object
const { interval, combineLatest } = rxjs;
const { map, startWith } = rxjs.operators;

// Get the dot element from the DOM
const dot = document.getElementById('dot');

// Function to animate the dot in 3D
function animateDot() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Emit values over time using an RxJS observable
    const time$ = interval(16); // Approx. 60 frames per second

    // X-axis motion: simple horizontal wave (sine wave)
    const xMotion$ = time$.pipe(
        map(t => Math.sin(t / 30) * (width / 3)), // Oscillating horizontally
        startWith(0)
    );

    // Y-axis motion: vertical oscillation
    const yMotion$ = time$.pipe(
        map(t => Math.cos(t / 40) * (height / 4)), // Oscillating vertically
        startWith(0)
    );

    // Z-axis motion: moving forward and backward
    const zMotion$ = time$.pipe(
        map(t => Math.sin(t / 20) * 200), // Simulating depth
        startWith(0)
    );

    // Combine the X, Y, and Z motions into a single observable
    const motion$ = combineLatest([xMotion$, yMotion$, zMotion$]);

    // Subscribe to the combined observable to update the dot's position
    motion$.subscribe(([x, y, z]) => {
        dot.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });
}

// Start the animation
animateDot();
