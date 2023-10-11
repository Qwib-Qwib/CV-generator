import '../styles/SkillSection.css'
import { useState } from 'react';
import PropTypes from 'prop-types'
import SkillCategory from './SkillCategory';

function SkillSection({focusedElement, handleEditItemClick, handleUpdateClick}) {
  const[skillCategories, setSkillCategories] = useState([]);

  function handleAddingCategories() {
    if (skillCategories.length() === 0) {
      setSkillCategories(skillCategories.concat(4000))
    } else {
      setSkillCategories(skillCategories.concat(skillCategories.slice(-1) + 1000))
    }
  }

  return (
    <div className={focusedElement === 0 ? 'neutral skill-section-wrapper' : 'skill-section-wrapper'}>
      <div className='skill-section title-block'>
        <div className='skill-section accent-bar'></div>
        <span className='skill-section title'>COMPÉTENCES</span>
      </div>
      <div className='skill-section-content'>
        {skillCategories.map((category) => {
          return <SkillCategory key={category} />
        })}
      </div>
    </div>
  )
}

SkillSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditItemClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SkillSection;
