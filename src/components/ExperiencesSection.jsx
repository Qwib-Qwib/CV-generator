import '../styles/ExperiencesSection.css'
import {PropTypes} from 'prop-types'
import ExperienceRange from './ExperienceRange';

function ExperiencesSection({focusedElement, handleEditClick, handleUpdateClick}) {
  return (
    <div className='experiences-section'>
      <ExperienceRange type='EXPÉRIENCE PROFESSIONNELLE' itemCountStart={1000} focusedElement={focusedElement} handleEditClick={handleEditClick} handleUpdateClick={handleUpdateClick} />
      <ExperienceRange type='EXPÉRIENCE ACADÉMIQUE' focusedElement={focusedElement} itemCountStart={2000} handleEditClick={handleEditClick} handleUpdateClick={handleUpdateClick} />
      <ExperienceRange type='ACTIVITÉS EXTRA-PROFESSIONNELLES' focusedElement={focusedElement} itemCountStart={3000} handleEditClick={handleEditClick} handleUpdateClick={handleUpdateClick} />
    </div>
  )
}

ExperiencesSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
}

export default ExperiencesSection;
