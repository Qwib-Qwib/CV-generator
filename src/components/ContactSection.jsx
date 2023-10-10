import '../styles/ContactSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function ContactSection() {
  return (
    <div className="contact-section">
      <div className='contact-section-title-block'>
        <div className='contact-section-title-accent-bar'></div>
        <span className='contact-section-title'>CONTACT</span>
      </div>
      <div className='contact-section-content'>
        <div className='contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faPhone} /></div>
          <span className='contact-line'>00.00.00.00.00</span>
        </div>
        <div className='contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faEnvelope} /></div>
          <span className='contact-line'>myemailaddress@testemail.com</span>
        </div>
        <div className='contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faLinkedin} /></div>
          <span className='contact-line'>@linkedinpseudo</span>
        </div>
        <div className='contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faGithub} /></div>
          <span className='contact-line'>Githubpseudo</span>
        </div>
        <div className='contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faFolderOpen} /></div>
          <span className='contact-line'>Portfolio</span>
        </div>
        <div className='contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faLocationDot} /></div>
          <span className='contact-line'>Ma région</span>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;
