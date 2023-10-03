import '../styles/ExperiencesItem.css'
import {PropTypes} from 'prop-types'
import Button from './Button'

function ExperiencesItem({dataId, focusedElement, handleEditClick, handleUpdateClick, handleDeleteClick}) {
  return(
    <div className='experiences-item' data-id={dataId}>
      <div className='experiences-item-date'>
        <p>Sept. 2023 -</p>
        <p>oct. 2023</p>
      </div>
      <div className='experiences-item-content'>
        <div className='experiences-item-header'>
          <h4 className='experiences-item-job-title'>Job title<span className='experiences-item-establishment'> (Company)</span></h4>
        </div>
        <div className='experiences-item-description'>
          <ul>
            <li>Example description</li>
          </ul>
        </div>
      </div>
      <div className='experiences-item-buttons'>
        <Button buttonType={'edit'} handleClick={(e) => handleEditClick(e.target.key)} />
        <Button buttonType={'delete'} handleClick={(e) => handleDeleteClick(parseInt(e.target.parentElement.parentElement.dataset.id))} />
      </div>
    </div>
  )
}

ExperiencesItem.propTypes = {
  dataId: PropTypes.number,
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func,
  handleDeleteClick: PropTypes.func
}

export default ExperiencesItem;
