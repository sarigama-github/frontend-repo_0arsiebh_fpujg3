import Navbar from './components/Navbar'
import LandingHero from './components/LandingHero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import FeatureHighlights from './components/FeatureHighlights'
import BetaIncentive from './components/BetaIncentive'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-textc-primary">
      <Navbar />
      <main>
        <LandingHero />
        <Problem />
        <Solution />
        <FeatureHighlights />
        <BetaIncentive />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
