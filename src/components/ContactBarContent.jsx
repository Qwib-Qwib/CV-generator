import '../styles/ContactBarContent.css'
import ContactSection from './ContactSection';
import SkillSection from './SkillSection';

function ContactBarContent() {
  return (
    <div className="contact-bar-content">
      <ContactSection />
      <SkillSection />
    </div>
  )
}

export default ContactBarContent;
