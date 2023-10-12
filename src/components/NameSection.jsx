import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/NameSection.css'
import Button from './Button';
import Input from './Input';

function NameSection({focusedElement, handleEditClick, handleUpdateClick}) {
  const [name, setName] = useState('John Doe');

  return (
    <div className={focusedElement === 0 ? 'primary-neutral name-section' : 'name-section'}>
      {focusedElement === 1 ? <Input category={'name'} value={name} handleChange={(e) => setName(e.target.value)} /> : <h1 className='name'>{name}</h1>}
      {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={handleEditClick} /></div> : null}
      {focusedElement === 1 ? <div className='update-button-wrapper'><Button buttonType={'update'} handleClick={handleUpdateClick} /></div> : null}
    </div>
  )
}

NameSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default NameSection;
