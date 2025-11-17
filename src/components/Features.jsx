import { Server, Layout, Zap, Shield, Database, Wand2 } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Server, title: 'FastAPI backend', desc: 'Pythonic APIs with blazing performance and type safety.' },
    { icon: Layout, title: 'Vite + React', desc: 'Modern frontend tooling with instant HMR and DX.' },
    { icon: Database, title: 'MongoDB ready', desc: 'Built-in helpers and schemas for persistence by default.' },
    { icon: Shield, title: 'CORS & routing', desc: 'Prewired CORS and sensible route structure out of the box.' },
    { icon: Zap, title: 'Live previews', desc: 'Shareable URLs for both frontend and backend during dev.' },
    { icon: Wand2, title: 'AI assisted', desc: 'Describe features in plain English, see them built live.' },
  ]

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">What you get</h2>
        <p className="mt-3 text-center text-gray-600">A clean foundation to move fast without breaking things.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-800">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
