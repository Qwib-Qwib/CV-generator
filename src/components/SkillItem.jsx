import '../styles/SkillItem.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button';
import Input from './Input';

function SkillItem({id, focusedElement, handleEditItemClick, handleUpdateClick, handleDeleteClick}) {
  const [skill, setSkill] = useState('skill');

  return(
    <li className={focusedElement === 0 ? 'tertiary-neutral skill-category-list-item':'skill-category-list-item'}>
      {focusedElement === id ? <Input category={'skill-category-list-item'} value={skill} handleChange={(e) => setSkill(e.target.value)} /> : skill}
      <div className='common-buttons-wrapper'>
        <Button buttonType={'edit'} handleClick={() => handleEditItemClick(id)} />
        <Button buttonType={'delete'} handleClick={() => handleDeleteClick(id)} />
      </div>
      {focusedElement === id ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
    </li>
  )
}

SkillItem.propTypes = {
  id: PropTypes.number,
  focusedElement: PropTypes.number,
  handleEditItemClick: PropTypes.func,
  handleUpdateClick: PropTypes.func,
  handleDeleteClick: PropTypes.func
}

export default SkillItem;
