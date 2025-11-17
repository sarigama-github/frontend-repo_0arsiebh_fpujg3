export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-textc-primary">Join 200 Elite Athletes Training Smarter</h2>
        <p className="mt-3 text-textc-secondary">Beta launches December 1, 2025. Spots are limited. Your lifetime discount is waiting.</p>

        <div className="mt-8 rounded-2xl border border-neutral-border bg-bg-surface p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-textc-secondary">Reserve Your Beta Spot — Free</h3>
          <form className="mt-4 grid gap-3 sm:grid-cols-3 text-left">
            <input type="email" required placeholder="Email Address *" className="sm:col-span-2 rounded-md border border-neutral-border bg-bg-variant px-4 py-2 text-sm text-textc-secondary placeholder:text-textc-tertiary focus:outline-none focus:ring-2 focus:ring-brand-logo" />
            <input type="text" placeholder="Name (optional)" className="sm:col-span-1 rounded-md border border-neutral-border bg-bg-variant px-4 py-2 text-sm text-textc-secondary placeholder:text-textc-tertiary focus:outline-none focus:ring-2 focus:ring-brand-logo" />
            <button type="submit" className="sm:col-span-3 inline-flex justify-center rounded-md bg-brand-logo px-5 py-2.5 text-white hover:bg-brand-mint/90">Save My Spot — Free</button>
          </form>
          <p className="mt-3 text-sm text-textc-tertiary">✅ No credit card required • ✅ Unsubscribe anytime • ✅ We hate spam as much as you do</p>
          <p className="mt-2 text-xs text-textc-tertiary">By joining, you'll receive updates about Shapyfy's beta launch and occasional training tips. We respect your inbox.</p>
        </div>
      </div>
    </section>
  )
}
