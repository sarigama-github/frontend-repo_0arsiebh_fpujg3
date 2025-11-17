export default function Problem() {
  const problems = [
    {
      emoji: '😤',
      title: "Your gym has terrible WiFi",
      desc: "Can't load your workout app when you need it most. Standing in the squat rack waiting for the app to sync is embarrassing.",
    },
    {
      emoji: '📱',
      title: 'Lost weeks of progress',
      desc: "Your tracking app didn't sync. Months of workout data gone forever. Starting from scratch feels like losing gains.",
    },
    {
      emoji: '📊',
      title: 'Stuck in spreadsheets',
      desc: 'Excel at the gym? Really? Fumbling with formulas between sets kills your focus and momentum.',
    },
    {
      emoji: '📈',
      title: "No idea if you're improving",
      desc: "You're logging workouts, but are you actually getting stronger? Guessing your next weight is leaving gains on the table.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-textc-primary text-center">Sound Familiar?</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.title} className="rounded-xl border border-neutral-border bg-bg-surface p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl">{p.emoji}</div>
              <h3 className="mt-4 font-semibold text-textc-secondary">{p.title}</h3>
              <p className="mt-2 text-sm text-textc-tertiary">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-textc-secondary font-medium">You deserve better.</p>
      </div>
    </section>
  )
}
