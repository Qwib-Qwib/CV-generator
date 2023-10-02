import { useState } from 'react'
import '../styles/Resume.css'
import ContactBar from './ContactBar'
import SummaryBar from './SummaryBar'
import NameSection from './NameSection'
import ExperiencesSection from './ExperiencesSection'

function Resume() {
  // This state defines whether a specific element of the resume is currently being edited, and which one it is.
  // Only one element can be edited at a time.
  // Editeable sections need it to determine whether they display fields or set values, and whether edition mode can be
  // activated.
  // 0 means nothing is currently being edited. Otherwise, each editeable sections is assigned a number.
  const [focusedElement, setFocusedElement] = useState(0)

  return (
    <div className="resume">
      <ContactBar />
      <SummaryBar focusedElement={focusedElement} handleProfessionEditClick={(e) => setFocusedElement(2)} handleSummaryEditClick={(e) => setFocusedElement(3)} handleUpdateClick={(e) => setFocusedElement(0)} />
      <NameSection focusedElement={focusedElement} handleEditClick={(e) => setFocusedElement(1)} handleUpdateClick={(e) => setFocusedElement(0)} />
      <ExperiencesSection />
    </div>
  )
}

export default Resume;
