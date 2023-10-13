import '../styles/SkillSection.css'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import SkillCategory from './SkillCategory';
import Button from './Button';

function SkillSection({focusedElement, handleEditItemClick, handleUpdateClick}) {
  const [skillCategories, setSkillCategories] = useState([]);

  // Used to check for overflowing resume content everytime a skill category is added. If inner overflow is detected,
  // the download button is disabled.
  useEffect(() => {
    const resume = document.querySelector('.resume');
    const downloadButton = document.querySelector('.download.button');
    if (resume.scrollHeight > resume.clientHeight || resume.scrollWidth > resume.clientWidth) {
      downloadButton.disabled = true;
    } else {
      downloadButton.disabled = false;
    }
  }, [skillCategories])

  function handleAddingCategories() {
    if (skillCategories.length === 0) {
      setSkillCategories(skillCategories.concat(4000))
    } else {
      setSkillCategories(skillCategories.concat(parseInt(skillCategories.slice(-1)) + 1000))
    }
  }

  function handleDeletingCategories(id) {
    setSkillCategories(skillCategories.filter((category) => category != id ))
  }

  return (
    <div className={focusedElement === 0 ? 'primary-neutral skill-section-wrapper' : 'skill-section-wrapper'}>
      <div className='skill-section title-block'>
        <div className='skill-section accent-bar'></div>
        <span className='skill-section title'>COMPÉTENCES</span>
      </div>
      <div className='skill-section-content'>
        {skillCategories.map((category) => {
          return <SkillCategory key={category} id={category} focusedElement={focusedElement} handleEditItemClick={handleEditItemClick} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeletingCategories} />
        })}
      </div>
      {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'add'} buttonText={'Ajouter catégorie'} handleClick={handleAddingCategories} /></div> : null}
    </div>
  )
}

SkillSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditItemClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SkillSection;
