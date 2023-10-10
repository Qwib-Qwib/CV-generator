import '../styles/ContactSection.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import Input from './Input'

function ContactSection({focusedElement, handleEditClick, handleUpdateClick}) {
  const [phoneNumber, setPhoneNumber] = useState('00.00.00.00.00');
  const [email, setEmail] = useState('myemailaddress@testemail.com');
  const [linkedin, setLinkedin] = useState('@linkedinpseudo');
  const [github, setGithub] = useState('Githubpseudo');
  const [portfolioLink, setPortfolioLink] = useState('#');
  const [location, setLocation] = useState('Ma région');

  return (
    <div className="contact-section">
      <div className='contact-section-title-block'>
        <div className='contact-section-title-accent-bar'></div>
        <span className='contact-section-title'>CONTACT</span>
      </div>
      <div className='contact-section-content'>
        <div className='neutral contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faPhone} /></div>
          {focusedElement === 4 ? <Input /> : <span className='contact-line'>{phoneNumber}</span>}
          <Button buttonType={'edit'} handleClick={() => handleEditClick(4)} />
        </div>
        <div className='neutral contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faEnvelope} /></div>
          <span className='contact-line'>{email}</span>
        </div>
        <div className='neutral contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faLinkedin} /></div>
          <span className='contact-line'>{linkedin}</span>
        </div>
        <div className='neutral contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faGithub} /></div>
          <span className='contact-line'>{github}</span>
        </div>
        <div className='neutral contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faFolderOpen} /></div>
          <a href={portfolioLink} className='contact-line'>Portfolio</a>
        </div>
        <div className='neutral contact-line-group'>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faLocationDot} /></div>
          <span className='contact-line'>{location}</span>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;
