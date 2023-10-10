import '../styles/ContactBar.css'
import PropTypes from 'prop-types'
import ContactBarContent from './ContactBarContent';

function ContactBar({focusedElement, handleEditClick, handleUpdateClick}) {
  return (
    <div className="contact-bar">
      <ContactBarContent focusedElement={focusedElement} handleEditClick={handleEditClick} handleUpdateClick={handleUpdateClick} />
    </div>
  )
}

ContactBar.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default ContactBar;
