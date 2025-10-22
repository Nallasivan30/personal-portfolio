export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name — Built with Next.js, TypeScript, Tailwind, and Framer Motion.
        </p>
      </div>
    </footer>
  )
}
