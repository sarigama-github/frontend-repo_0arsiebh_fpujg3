import Navbar from './components/Navbar'
import LandingHero from './components/LandingHero'
import Problem from './components/Problem'
import Solution from './components/Solution'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main>
        <LandingHero />
        <Problem />
        <Solution />
      </main>
      <footer className="py-10 border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Shapyfy • Train offline • AI coaching</p>
          <a className="text-gray-600 hover:text-gray-900" href="/test">Run backend test →</a>
        </div>
      </footer>
    </div>
  )
}

export default App
