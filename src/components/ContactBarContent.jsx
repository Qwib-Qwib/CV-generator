import '../styles/ContactBarContent.css'
import PropTypes from 'prop-types'
import ContactSection from './ContactSection';
import SkillSection from './SkillSection';

function ContactBarContent({focusedElement, handleEditClick, handleEditItemClick, handleUpdateClick}) {
  return (
    <div className="contact-bar-content">
      <ContactSection focusedElement={focusedElement} handleEditClick={handleEditClick} handleUpdateClick={handleUpdateClick} />
      <SkillSection focusedElement={focusedElement} handleEditItemClick={handleEditItemClick} handleUpdateClick={handleUpdateClick} />
    </div>
  )
}

ContactBarContent.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleEditItemClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default ContactBarContent;
