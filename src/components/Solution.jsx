export default function Solution() {
  const features = [
    {
      emoji: '📶',
      title: 'Works Offline First',
      desc: 'Log workouts, track progress, and view your history with zero internet. Data stays on device and syncs automatically later so Shapyfy works in every gym.',
    },
    {
      emoji: '🤖',
      title: 'AI-Powered Coaching',
      desc: 'AI analyzes every workout and tells you exactly what to do next with progressive overload tips, strength predictions, and smart exercise suggestions.',
    },
    {
      emoji: '📈',
      title: 'Actually See Progress',
      desc: "AI forecasts milestones (“You'll hit 225lb bench press in 6 weeks”), tracks measurements/PRs/volume, and visualizes results with motivating charts.",
    },
  ]

  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-bg-primary to-bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-textc-primary text-center">Meet Shapyfy: Your Offline AI Strength Coach</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-border bg-bg-surface p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl">{f.emoji}</div>
              <h3 className="mt-4 font-semibold text-textc-secondary">{f.title}</h3>
              <p className="mt-2 text-sm text-textc-tertiary">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
