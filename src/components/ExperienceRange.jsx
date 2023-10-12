import '../styles/ExperienceRange.css'
import { useState } from 'react';
import {PropTypes} from 'prop-types'
import Button from './Button';
import ExperiencesItem from './ExperiencesItem';

function ExperienceRange({type, itemCountStart, focusedElement, handleEditClick, handleUpdateClick}) {
  const [itemList, setItemList] = useState([]);

  function handleAddingItem() {
    if (itemList.length === 0) {
      setItemList(itemList.concat(itemCountStart))
    } else {
      setItemList(itemList.concat(parseInt(itemList.slice(-1)) + 1))
    }
  }

  function handleDeletingItems(key) {
    setItemList(itemList.filter((item) => item != key))
  }

  return (
    <div className={focusedElement === 0 ? 'primary-neutral experience-type-section' : 'experience-type-section'}>
      <h3 className='experiences-title'>{type}</h3>
      {focusedElement === 0 && <div className='common-buttons-wrapper'><Button buttonType={'add'} handleClick={handleAddingItem} /></div>}
      {itemList.map((item) => {
        return <ExperiencesItem key={item} dataId={item} focusedElement={focusedElement} handleEditClick={handleEditClick} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeletingItems} />
      })}
    </div>
  )
}

ExperienceRange.propTypes = {
  type: PropTypes.string,
  itemCountStart: PropTypes.number,
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
}

export default ExperienceRange;
