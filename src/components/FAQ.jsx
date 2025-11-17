import { useState } from 'react'

const faqs = [
  { q: 'Is the beta really free?', a: 'Yes. Free until Jan 1, 2026; afterwards beta users pay $3.50/month (50% off) and there is still a free tier.' },
  { q: 'What platforms do you support?', a: 'iOS and Android starting Dec 1.' },
  { q: 'How is this different from Hevy/Strong/JEFIT?', a: 'Only Shapyfy combines full offline support with AI coaching at $6.99/month ($3.50 for beta).' },
  { q: 'When do AI features launch?', a: 'Core app December 1; AI features January 1 with beta users getting early access.' },
  { q: 'Can I cancel anytime?', a: 'Yes; cancel whenever and keep the lifetime discount if you return.' },
  { q: 'Is my workout data safe?', a: 'Stored locally first, encrypted in transit/at rest, never sold.' },
  { q: "What if I don't get a beta spot?", a: "You'll join the waitlist and receive priority at public launch with a launch discount." },
  { q: 'Do I need special equipment or wearables?', a: 'No; phone only. Integrations may arrive later.' },
  { q: 'What if you raise prices later?', a: 'Lifetime 60% discount applies to any future tier (e.g., $9.99 → $4.00, $12.99 → $5.20).' },
  { q: 'What if I have feature requests?', a: 'Beta users get direct roadmap access and feature voting.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-neutral-border bg-bg-surface p-4">
      <button className="w-full text-left flex justify-between items-center" onClick={() => setOpen(!open)}>
        <span className="font-medium text-textc-secondary">{q}</span>
        <span className="text-brand-logo">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-sm text-textc-tertiary">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-bg-primary to-bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-textc-primary text-center">Frequently Asked Questions</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
