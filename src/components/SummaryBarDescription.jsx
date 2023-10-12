import '../styles/SummaryBarDescription.css'
import { useState } from 'react'
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

function SummaryBarDescription({focusedElement, handleEditClick, handleUpdateClick}) {
  const [description, setDescription] = useState('Write a short description of yourself here.')

  if (focusedElement === 0) {
    return (
      <div className="primary-neutral summary-bar-description">
        <p lang='fr'>
          {description}
        </p>
        {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={handleEditClick} /></div> : null}
      </div>
    )
  } else if (focusedElement === 3) {
    return (
      <div className='currently-edited summary-bar-description'>
        <Input type='textarea' category={'description'} value={description} handleChange={(e) => setDescription(e.target.value)} />
        <div className='update-button-wrapper'>
          <Button buttonType={'update'} handleClick={handleUpdateClick} />
        </div>
      </div>
    )
  } else {
    return (
      <p lang='fr' className="deactivated summary-bar-description">{description}</p>
    )
  }
}

SummaryBarDescription.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SummaryBarDescription;
