import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ELandingPage from './components/ResLanding'
import ApprodablePackages from './components/FacultySection'
import TeamSection from './components/TeamSection'
import NewsletterSignup from './components/NewsLetter'
import Footer from './components/Footer'

function App() {

  return (
    <div className='font-sans text-grey-white'>
    <ELandingPage/>
    <ApprodablePackages/>
    <TeamSection/>
    <NewsletterSignup/>
    <Footer />
    </div>
  )
}

export default App
