import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-mint/20 via-bg-primary to-bg-surface">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(85,198,168,0.15),transparent)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-textc-primary">
              Never Lose a Workout Again
            </h1>
            <p className="mt-6 text-lg text-textc-secondary">
              The only offline-first strength training app with AI-powered coaching. Train without WiFi. Track every rep. Get smarter with AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-brand-logo px-5 py-2.5 text-white shadow hover:bg-brand-mint/90">
                Join the Beta — Limited to 200 Athletes
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-neutral-border px-5 py-2.5 text-textc-secondary hover:bg-bg-variant">
                See how it works
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-textc-secondary">
              <p className="leading-relaxed">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="text-brand-logo" size={18} />
                  Lifetime 60% off for beta users (currently $2.80/month)
                </span>
                <br />
                ⏰ Beta starts December 1 • Public launch January 1
                <br />
                <em className="text-textc-tertiary">Beta timeline subject to adjustment. Your discount is guaranteed forever.</em>
              </p>
              <p className="text-textc-tertiary">No credit card required • Unsubscribe anytime</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-bright blur-3xl opacity-60" />
            <div className="relative rounded-2xl border border-neutral-border bg-bg-surface/80 p-6 shadow-sm backdrop-blur">
              <div className="grid grid-cols-3 gap-4 text-center">
                {["Offline", "AI Coach", "Sync"].map((k) => (
                  <div key={k} className="rounded-lg bg-bg-variant p-4">
                    <p className="text-sm text-textc-tertiary">{k}</p>
                    <p className="mt-2 text-2xl font-bold text-textc-secondary">Ready</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-textc-tertiary">
                Built for gyms with bad WiFi. Optimized for focus between sets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
