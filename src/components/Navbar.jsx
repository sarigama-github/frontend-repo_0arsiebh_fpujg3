import { Link } from 'react-router-dom'
import { Menu, Dumbbell, Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-bg-surface/70 bg-bg-surface/80 border-b border-neutral-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-logo to-brand-mint grid place-items-center text-white">
            <Dumbbell size={18} />
          </div>
          <span className="font-bold text-textc-secondary">Shapyfy</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-textc-tertiary">
          <a href="#features" className="hover:text-textc-primary transition-colors">Features</a>
          <Link to="/test" className="hover:text-textc-primary transition-colors">Backend Test</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-textc-primary">
            <Github size={16} />
            GitHub
          </a>
        </nav>
        <button className="sm:hidden p-2 rounded-md border border-neutral-border text-textc-secondary">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
