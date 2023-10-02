import '../styles/Input.css'
import PropTypes from 'prop-types'

function Input({type = 'text', category, value, handleChange}) {
  if (type === 'textarea') {
    return(
      <textarea className={'input ' + category + '-input'} value={value} onChange={handleChange} cols="30" rows="4"></textarea>
    )
  } else {
    return(
      <input type={type} className={'input ' + category + '-input'} value={value} onChange={handleChange} />
    )
  }
}

Input.propTypes = {
  type: PropTypes.string,
  category: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func
};

export default Input;
