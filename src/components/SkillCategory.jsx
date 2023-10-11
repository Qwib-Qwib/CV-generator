import '../styles/SkillCategory.css'
import { useState } from 'react';
import SkillItem from './SkillItem';
import Button from './Button';

function SkillCategory({id, focusedElement, handleEditItemClick, handleUpdateClick, handleDeleteClick}) {
  const[skillItems, setSkillItems] = useState([]);

  return (
    <ul className={focusedElement === 0 ? 'neutral skill-category' : 'skill-category'}>
      {skillItems.map((item) => {
        <SkillItem key={item} />
      })}
      <div className='skill-category-buttons'>
        <Button buttonType={'edit'} />
        <Button buttonType={'delete'} />
      </div>
    </ul>
  )
}

export default SkillCategory;
