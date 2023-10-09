import '../styles/ProfessionalExperience.css'
import { useState } from 'react';
import {PropTypes} from 'prop-types'
import Button from './Button';
import ExperiencesItem from './ExperiencesItem';

function ProfessionalExperience({focusedElement, handleEditClick, handleUpdateClick}) {
  const [itemList, setItemList] = useState([])

  function handleAddingItem() {
    if (itemList.length === 0) {
      setItemList(itemList.concat(50))
    } else {
      setItemList(itemList.concat(parseInt(itemList.slice(-1)) + 1))
    }
  }

  function handleDeletingItems(key) {
    setItemList(itemList.filter((item) => item != key))
  }

  return (
    <div className='neutral professional-experience-section'>
      <h3 className='experiences-title'>EXPÉRIENCE PROFESSIONNELLE</h3>
      {focusedElement === 0 && <Button buttonType={'add'} handleClick={handleAddingItem} />}
      {itemList.map((item) => {
        return <ExperiencesItem key={item} dataId={item} focusedElement={focusedElement} handleEditClick={handleEditClick} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeletingItems} />
      })}
    </div>
  )
}

ProfessionalExperience.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
}

export default ProfessionalExperience;
