import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(59,130,246,0.2),transparent)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Build full‑stack apps with AI speed
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Spin up a FastAPI backend and Vite + React frontend in seconds. Iterate live and ship faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/test" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">
                Run Backend Test
                <ArrowRight size={16} />
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-gray-700 hover:bg-gray-50">
                Learn more
              </a>
            </div>
            <ul className="mt-8 space-y-3 text-gray-700">
              {["FastAPI backend", "Vite + React frontend", "Tailwind styling", "Live preview URLs"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-blue-100 blur-3xl" />
            <div className="relative rounded-xl border bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                {["Backend", "Frontend", "Preview"].map((k) => (
                  <div key={k} className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">{k}</p>
                    <p className="mt-2 text-2xl font-bold text-gray-800">Ready</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Use the navigation to run the backend test and see connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
