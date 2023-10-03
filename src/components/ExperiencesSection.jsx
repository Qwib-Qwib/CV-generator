import '../styles/ExperiencesSection.css'
import {PropTypes} from 'prop-types'
import AcademicExperience from './AcademicExperience';
import ExtraProfessionalExperience from './ExtraProfessionalExperience';
import ProfessionalExperience from './ProfessionalExperience';

function ExperiencesSection({focusedElement, handleEditClick, handleUpdateClick}) {
  return (
    <div className='experiences-section'>
      <ProfessionalExperience focusedElement={focusedElement} handleEditClick={handleEditClick} handleUpdateClick={handleUpdateClick} />
      <AcademicExperience />
      <ExtraProfessionalExperience />
    </div>
  )
}

ExperiencesSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
}

export default ExperiencesSection;
