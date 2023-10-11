import '../styles/ContactBar.css'
import PropTypes from 'prop-types'
import ContactBarContent from './ContactBarContent';

function ContactBar({focusedElement, handleEditClick, handleEditItemClick, handleUpdateClick}) {
  return (
    <div className="contact-bar">
      <ContactBarContent focusedElement={focusedElement} handleEditClick={handleEditClick} handleEditItemClick={handleEditItemClick} handleUpdateClick={handleUpdateClick} />
    </div>
  )
}

ContactBar.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleEditItemClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default ContactBar;
