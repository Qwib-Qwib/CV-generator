import '../styles/SkillCategory.css'
import { useState } from 'react';
import PropTypes from 'prop-types'
import useOverflowAndEdition from '../hooks/useOverflowAndEdition.js';
import SkillItem from './SkillItem';
import Button from './Button';
import Input from './Input';

function SkillCategory({id, focusedElement, handleEditItemClick, handleUpdateClick, handleDeleteClick}) {
  const [categoryTitle, setCategoryTitle] = useState('Category');
  const [skillItems, setSkillItems] = useState([]);

  // Custom hook used to disable the Download PDF button if resume content overflows or Edition mode is on.
  useOverflowAndEdition(focusedElement, [categoryTitle, skillItems]);

  function handleAddingSkillItems() {
    if (skillItems.length === 0) {
      setSkillItems(skillItems.concat(id + 1))
    } else {
      setSkillItems(skillItems.concat(parseInt(skillItems.slice(-1)) + 1))
    }
  }

  function handleDeletingSkillItems(id) {
    setSkillItems(skillItems.filter((item) => item != id ))
  }

  return (
    <div className= {focusedElement === 0 ? 'secondary-neutral skill-category-wrapper' : 'skill-category-wrapper'}>
      <div className='skill-category-title-wrapper'>
        {focusedElement === id ? <Input category={'skill-category-title'} value={categoryTitle} handleChange={(e) => setCategoryTitle(e.target.value)} /> : <h3 className='skill-category-title'>{categoryTitle}</h3>}
        {focusedElement === id ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div>: null}
      </div>
      <ul className='skill-category-list'>
        {skillItems.map((item) => {
          return <SkillItem key={item} id={item} focusedElement={focusedElement} handleEditItemClick={handleEditItemClick} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeletingSkillItems} />
        })}
      </ul>
      <div className='common-buttons-wrapper'>
        <Button buttonType={'add'} buttonText={'Ajouter compét.'} handleClick={() => handleAddingSkillItems()} />
        <Button buttonType={'edit'} handleClick={() => handleEditItemClick(id)} />
        <Button buttonType={'delete'} handleClick={() => handleDeleteClick(id)} />
      </div>
    </div>
  )
}

SkillCategory.propTypes = {
  id: PropTypes.number,
  focusedElement: PropTypes.number,
  handleEditItemClick: PropTypes.func,
  handleUpdateClick: PropTypes.func,
  handleDeleteClick: PropTypes.func
};

export default SkillCategory;
