import { Navbar } from "@/components/navbar"
import { BentoGallery } from "@/components/bento-gallery"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="section-pad">
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <header className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-balance">Gallery</h1>
            <p className="text-muted-foreground mt-2">Selected visuals and snapshots from projects and experiments.</p>
          </header>
          <BentoGallery />
        </section>
      </main>
      <Footer />
    </>
  )
}
