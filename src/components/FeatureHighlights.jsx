import { CheckCircle2 } from 'lucide-react'

export default function FeatureHighlights() {
  const items = [
    'Quick Workout Logging — Lightning-fast exercise entry for between sets.',
    'Comprehensive Exercise Library — Hundreds of exercises plus instant custom movements.',
    'Progress Visualization — Charts showing gains for every lift.',
    'Body Measurements — Track weight, body fat, muscle mass.',
    "AI Strength Predictions (Coming Jan 1) — Know where you're headed, not just where you've been.",
    "Smart Recommendations (Coming Jan 1) — “You haven't trained legs in 6 days — prioritize squats today.”",
    '100% Offline Capability — Every feature works without internet.',
    'Secure & Private — Encrypted data, never sold.',
  ]

  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-textc-primary text-center">Everything You Need to Get Stronger</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-xl border border-neutral-border bg-bg-variant/60 p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-brand-logo" size={20} />
              <p className="text-sm text-textc-secondary">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
