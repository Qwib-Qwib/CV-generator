import '../styles/SummaryBarTitle.css'
import PropTypes from 'prop-types'
import { useState } from 'react';
import Button from './Button';
import Input from './Input';

function SummaryBarTitle({focusedElement, handleProfessionEditClick, handleUpdateClick}) {
  const [profession, setProfession] = useState('My profession')

  if (focusedElement === 0) {
    return (
      <h2 className="neutral summary-bar-title">
        {profession}
        <Button buttonType={'edit'} handleClick={handleProfessionEditClick} />
      </h2>
    )
  }
  else if (focusedElement === 2) {
    return(
    <div className='currently-edited summary-bar-title'>
      <Input category={'title'} value={profession} handleChange={(e) => setProfession(e.target.value)} />
      <div className='button-wrapper'>
        <Button buttonType={'update'} handleClick={handleUpdateClick} />
      </div>
    </div>
    )
  } else {
    return(
      <h2 className='deactivated summary-bar-title'>{profession}</h2>
    )
  }
}

SummaryBarTitle.propTypes = {
  focusedElement: PropTypes.number,
  handleProfessionEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SummaryBarTitle;