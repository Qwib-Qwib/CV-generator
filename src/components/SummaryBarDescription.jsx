import '../styles/SummaryBarDescription.css'
import { useState } from 'react'
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

// Focus ID code for this section is 3.
function SummaryBarDescription({focusedElement, handleEditClick, handleUpdateClick}) {
  const [description, setDescription] = useState('Décrivez-vous en un paragraphe ici.');

  return (
    <div className={focusedElement === 0 ? 'primary-neutral summary-bar-description-wrapper' : 'summary-bar-description-wrapper'}>
      {focusedElement === 3 ? <Input type='textarea' category={'description'} value={description} handleChange={(e) => setDescription(e.target.value)} /> : <p lang='fr' className='summary-bar-description'>{description}</p>}
      {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={handleEditClick} /></div> : null}
      {focusedElement === 3 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
    </div>
  )
}

SummaryBarDescription.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SummaryBarDescription;
