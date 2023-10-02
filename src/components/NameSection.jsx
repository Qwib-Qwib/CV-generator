import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/NameSection.css'
import Button from './Button';
import Input from './Input';

function NameSection({focusedElement, handleEditClick, handleUpdateClick}) {
  const [name, setName] = useState('John Doe')

  if (focusedElement === 0) {
    return (
      <h1 className="neutral name-section">
        {name}
        <Button buttonType={'edit'} handleClick={handleEditClick} />
      </h1>
    )
  } else if (focusedElement === 1) {
    return (
      <div className='currently-edited name-section'>
        <Input category={'name'} value={name} handleChange={(e) => setName(e.target.value)} />
        <div className='button-wrapper'>
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
