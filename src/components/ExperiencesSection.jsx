import '../styles/ExperiencesSection.css'
import AcademicExperience from './AcademicExperience';
import ExtraProfessionalExperience from './ExtraProfessionalExperience';
import ProfessionalExperience from './ProfessionalExperience';

function ExperiencesSection() {
  return (
    <div className='experiences-section'>
      <ProfessionalExperience />
      <AcademicExperience />
      <ExtraProfessionalExperience />
    </div>
  )
}

export default ExperiencesSection;
