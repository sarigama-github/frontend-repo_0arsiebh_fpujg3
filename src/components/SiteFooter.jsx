export default function SiteFooter() {
  return (
    <footer className="py-10 border-t border-neutral-border bg-bg-surface/90">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-textc-tertiary">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-textc-secondary">© 2025 Shapyfy. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-textc-primary">Privacy Policy</a>
            <a href="#" className="hover:text-textc-primary">Terms of Service</a>
            <a href="mailto:hello@shapyfy.app" className="hover:text-textc-primary">Contact Us</a>
          </nav>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-textc-secondary">Follow the journey — <a className="hover:text-textc-primary" href="#">Instagram</a> @shapyfy_app • <a className="hover:text-textc-primary" href="#">Facebook</a> Shapyfy • <a className="hover:text-textc-primary" href="mailto:hello@shapyfy.app">hello@shapyfy.app</a></p>
          <p className="text-textc-tertiary">Built in Poland by strength athletes, for strength athletes.</p>
        </div>
        <div className="mt-6 text-right">
          <a className="text-textc-secondary hover:text-textc-primary" href="/test">Run backend test →</a>
        </div>
      </div>
    </footer>
  )
}
