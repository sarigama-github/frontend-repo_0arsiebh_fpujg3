export default function BetaIncentive() {
  const benefits = [
    {
      emoji: '💰',
      title: 'Lifetime 60% Off',
      desc:
        'Launch price $6.99/month becomes $2.80 for beta users, trainer tier ~$29.99 becomes $12.00, and every future premium feature stays 60% off forever (first 200 users, offer ends Dec 15).',
    },
    {
      emoji: '🚀',
      title: 'Early Access to AI',
      desc:
        'Train with AI coaching before public launch, test features as they ship, and shape the future of AI fitness.',
    },
    {
      emoji: '🎯',
      title: 'VIP Community Access',
      desc:
        'Join the beta Discord, get direct founder access, share PRs, and connect with serious lifters.',
    },
    {
      emoji: '📊',
      title: 'Your Voice Matters',
      desc:
        'Request features, vote on the roadmap, and co-create the product.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-bg-primary to-bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-textc-primary text-center">Why Join the Beta?</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-neutral-border bg-bg-surface p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl">{b.emoji}</div>
              <h3 className="mt-4 font-semibold text-textc-secondary">{b.title}</h3>
              <p className="mt-2 text-sm text-textc-tertiary">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
