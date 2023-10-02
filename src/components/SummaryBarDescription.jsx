import '../styles/SummaryBarDescription.css'
import { useState } from 'react'
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

function SummaryBarDescription({focusedElement, handleEditClick, handleUpdateClick}) {
  const [description, setDescription] = useState('Lorem ipsum trucmuche.')

  if (focusedElement === 0) {
    return (
      <p lang='fr' className="neutral summary-bar-description">
        {description}
        <Button buttonType={'edit'} handleClick={handleEditClick} />
      </p>
    )
  } else if (focusedElement === 3) {
    return (
      <div className='currently-edited summary-bar-description'>
        <Input type='textarea' category={'description'} value={description} handleChange={(e) => setDescription(e.target.value)} />
        <div className='button-wrapper'>
          <Button buttonType={'update'} handleClick={handleUpdateClick} />
        </div>
      </div>
    )
  } else {
    return (
      <h1 className="deactivated summary-bar-description">{description}</h1>
    )
  }
}

SummaryBarDescription.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SummaryBarDescription;
