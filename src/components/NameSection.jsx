import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/NameSection.css'
import Button from './Button';
import Input from './Input';

function NameSection({focusedElement, handleEditClick, handleUpdateClick}) {
  const [name, setName] = useState('John Doe')

  if (focusedElement === 0) {
    return (
      <div className="primary-neutral name-section">
        <h1 className='name'>{name}</h1>
        {focusedElement === 0 ? <div className='common-buttons-wrapper'><Button buttonType={'edit'} handleClick={handleEditClick} /></div> : null}
      </div>

    )
  } else if (focusedElement === 1) {
    return (
      <div className='name-section'>
        <Input category={'name'} value={name} handleChange={(e) => setName(e.target.value)} />
        <div className='update-button-wrapper'>
          <Button buttonType={'update'} handleClick={handleUpdateClick} />
        </div>
      </div>
    )
  } else {
    return (
      <h1 className="deactivated name-section">{name}</h1>
    )
  }
}

NameSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default NameSection;
