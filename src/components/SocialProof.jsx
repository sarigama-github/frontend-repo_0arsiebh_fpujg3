export default function SocialProof() {
  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-textc-primary text-center">Built by Athletes, for Athletes</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-border bg-bg-surface p-6 shadow-sm">
            <h3 className="font-semibold text-textc-secondary">Why I Built Shapyfy</h3>
            <p className="mt-3 text-sm text-textc-tertiary">“I've been tracking workouts in spreadsheets for 5 years... So I built Shapyfy — the offline-first, AI-powered tracker I always wanted. No BS, just gains. — Sebastian Druciak, Founder”</p>
            <div className="mt-4 rounded-lg bg-bg-variant p-4 text-sm text-textc-secondary">
              <span role="img" aria-label="rocket">🚀</span> Beta Launches December 1 • Limited to 200 Athletes — Join the waitlist to secure your spot.
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-border bg-bg-surface p-6 shadow-sm">
            <h3 className="font-semibold text-textc-secondary">From Our Early Users</h3>
            <blockquote className="mt-3 text-sm text-textc-tertiary">“Finally, an app that understands that gyms have terrible WiFi. The AI predictions are like having a coach who never forgets your numbers.” — Early Beta User</blockquote>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-brand-mint/20 text-textc-secondary p-3">🔥 200 athletes max in beta</div>
              <div className="rounded-lg bg-lavender-300/30 text-textc-secondary p-3">📈 Train smarter with AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
