import '../styles/SkillSection.css'
import { useState } from 'react';
import PropTypes from 'prop-types'
import SkillCategory from './SkillCategory';
import Button from './Button';

function SkillSection({focusedElement, handleEditItemClick, handleUpdateClick}) {
  const [skillCategories, setSkillCategories] = useState([]);

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
      {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'add'} handleClick={handleAddingCategories} /></div> : null}
    </div>
  )
}

SkillSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditItemClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SkillSection;
