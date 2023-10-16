import '../styles/SummaryBarTitle.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';

// Focus ID code for this section is 2.
function SummaryBarTitle({focusedElement, handleProfessionEditClick, handleUpdateClick}) {
  const [profession, setProfession] = useState('Ma profession');

  return (
    <div className={focusedElement === 0 ? 'primary-neutral summary-bar-title-wrapper' : 'summary-bar-title-wrapper'}>
      {focusedElement === 2 ? <Input category={'title'} value={profession} handleChange={(e) => setProfession(e.target.value)} /> : <h2 className='summary-bar-title'>{profession}</h2>}
      {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={handleProfessionEditClick} /></div> : null}
      {focusedElement === 2 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
    </div>
  )
}

SummaryBarTitle.propTypes = {
  focusedElement: PropTypes.number,
  handleProfessionEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SummaryBarTitle;
