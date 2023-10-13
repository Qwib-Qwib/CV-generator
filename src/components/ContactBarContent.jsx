import '../styles/ContactBarContent.css';
import PropTypes from 'prop-types';
import useOverflowAndEdition from '../hooks/useOverflowAndEdition.js';
import ContactSection from './ContactSection';
import SkillSection from './SkillSection';

function ContactBarContent({focusedElement, handleEditClick, handleEditItemClick, handleUpdateClick}) {
  // Custom hook used to disable the Download PDF button if resume content overflows or Edition mode is on.
  useOverflowAndEdition(focusedElement);

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
