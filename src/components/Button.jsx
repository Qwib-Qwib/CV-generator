import '../styles/Button.css'
import PropTypes from 'prop-types'

function Button({buttonType, handleClick}) {
  return(
    <button className={'button ' + buttonType} onClick={handleClick}>{buttonType.slice(0, 1).toUpperCase() + buttonType.slice(1)}</button>
  )
}

Button.propTypes = {
  buttonType: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
