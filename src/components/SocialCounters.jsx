export default function SocialCounters({ launched = false, athletes = 0, remaining = 200 }) {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
      {launched ? (
        <>
          <div className="rounded-lg bg-brand-mint/20 text-textc-secondary p-3">🔥 {athletes} athletes are already training with Shapyfy</div>
          <div className="rounded-lg bg-secondary-coral-200/40 text-textc-secondary p-3">🎟️ {remaining} spots remaining in beta</div>
        </>
      ) : (
        <>
          <div className="rounded-lg bg-brand-mint/20 text-textc-secondary p-3">🚀 Beta Launches December 1</div>
          <div className="rounded-lg bg-lavender-300/30 text-textc-secondary p-3">🎟️ Limited to 200 Athletes — Join the waitlist</div>
        </>
      )}
    </div>
  )
}
