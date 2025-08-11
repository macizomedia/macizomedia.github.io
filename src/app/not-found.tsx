export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-primary underline">Go back home</a>
    </div>
  );
}
