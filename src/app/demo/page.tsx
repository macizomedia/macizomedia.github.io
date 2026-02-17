export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <h1 className="text-sm font-semibold tracking-wide">Demo Route: Stitch Variant 2</h1>
        <a
          href="/stitch_abquanta_landing_page_variant_2/index.html"
          target="_blank"
          rel="noreferrer"
          className="text-sm underline underline-offset-4"
        >
          Open Raw HTML
        </a>
      </div>
      <iframe
        title="Stitch Abquanta Landing Page Variant 2"
        src="/stitch_abquanta_landing_page_variant_2/index.html"
        className="block h-[calc(100vh-56px)] w-full border-0"
      />
    </main>
  )
}
