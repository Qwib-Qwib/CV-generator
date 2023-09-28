import '../styles/Resume.css'
import ContactBar from './ContactBar'
import SummaryBar from './SummaryBar'
import NameSection from './NameSection'
import ExperiencesSection from './ExperiencesSection'

function Resume() {
  return (
    <div className="resume">
      <ContactBar />
      <SummaryBar />
      <NameSection />
      <ExperiencesSection />
    </div>
  )
}

export default Resume;
