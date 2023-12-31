import '../styles/ContactSection.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
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
  const [github, setGithub] = useState('@githubpseudo');
  const [portfolioLink, setPortfolioLink] = useState('monportfolio.fr');
  const [location, setLocation] = useState('Ma région');

  // Forces an input field to always start with an @ for clarity and consistency when dealing with pseudos.
  function startsWithAt(value) {
    if (value.startsWith('@') === false) {
      return '@' + value;
    } else {
      return value;
    }
  }

  return (
    <div className="contact-section-wrapper">
      <div className='contact-section title-block'>
        <div className='contact-section accent-bar'></div>
        <span className='contact-section title'>CONTACT</span>
      </div>
      <div className='contact-section-content'>
        <div className={focusedElement === 0 ? 'primary-neutral contact-line-group' : 'contact-line-group'}>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faPhone} /></div>
          {focusedElement === 4 ? <Input category='contact-tel' value={phoneNumber} handleChange={(e) => setPhoneNumber(e.target.value)} /> : <span className='contact-line'>{phoneNumber}</span>}
          {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={() => handleEditClick(4)} /></div> : null}
          {focusedElement === 4 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
        </div>
        <div className={focusedElement === 0 ? 'primary-neutral contact-line-group' : 'contact-line-group'}>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faEnvelope} /></div>
          {focusedElement === 5 ? <Input category='contact-email' value={email} handleChange={(e) => setEmail(e.target.value)} /> : <span className='contact-line'>{email}</span>}
          {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} buttonText={'Modifier lien'} handleClick={() => handleEditClick(5)} /></div> : null}
          {focusedElement === 5 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
        </div>
        <div className={focusedElement === 0 ? 'primary-neutral contact-line-group' : 'contact-line-group'}>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faLinkedin} /></div>
          {focusedElement === 6 ? <Input category='contact-linkedin' value={startsWithAt(linkedin)} handleChange={(e) => setLinkedin(startsWithAt(e.target.value))} /> : <span className='contact-line'>{linkedin}</span>}
          {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={() => handleEditClick(6)} /></div> : null}
          {focusedElement === 6 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
        </div>
        <div className={focusedElement === 0 ? 'primary-neutral contact-line-group' : 'contact-line-group'}>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faGithub} /></div>
          {focusedElement === 7 ? <Input category='contact-github' value={startsWithAt(github)} handleChange={(e) => setGithub(startsWithAt(e.target.value))} /> : <span className='contact-line'>{github}</span>}
          {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={() => handleEditClick(7)} /></div> : null}
          {focusedElement === 7 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
        </div>
        <div className={focusedElement === 0 ? 'primary-neutral contact-line-group' : 'contact-line-group'}>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faFolderOpen} /></div>
          {focusedElement === 8 ? <Input category='contact-portfolio' value={portfolioLink} handleChange={(e) => setPortfolioLink(e.target.value)} /> : <span className='contact-line'>{portfolioLink}</span>}
          {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} buttonText={'Modifier lien'} handleClick={() => handleEditClick(8)} /></div> : null}
          {focusedElement === 8 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
        </div>
        <div className={focusedElement === 0 ? 'primary-neutral contact-line-group' : 'contact-line-group'}>
          <div className='icon-wrapper'><FontAwesomeIcon icon={faLocationDot} /></div>
          {focusedElement === 9 ? <Input category='contact-location' value={location} handleChange={(e) => setLocation(e.target.value)} /> : <span className='contact-line'>{location}</span>}
          {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={() => handleEditClick(9)} /></div> : null}
          {focusedElement === 9 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
        </div>
      </div>
    </div>
  )
}

ContactSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default ContactSection;
