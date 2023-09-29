import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/NameSection.css'

function NameSection({focusedElement, handleEditClick, handleUpdateClick}) {
  const [name, setName] = useState('John Doe')

  if (focusedElement === 0) {
    return (
      <h1 className="neutral name-section">
        {name}
        <button className='button edit' onClick={handleEditClick}>Edit</button>
      </h1>
    )
  } else if (focusedElement === 1) {
    return (
      <div className='currently-edited name-section'>
        <input className='name-input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button className='button update' onClick={handleUpdateClick}>Update</button>
      </div>
    )
  } else {
    return (
      <h1>AAAAAAAAAAHHHHHHHHH</h1>
    )
  }
}

NameSection.propTypes = {
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default NameSection;
