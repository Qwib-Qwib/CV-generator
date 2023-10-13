import '../styles/Button.css'
import PropTypes from 'prop-types'

function Button({buttonType, buttonText = buttonType.slice(0, 1).toUpperCase() + buttonType.slice(1), handleClick}) {
  return(
    <button className={'button ' + buttonType} onClick={handleClick}>{buttonText}</button>
  )
}

Button.propTypes = {
  buttonType: PropTypes.string,
  buttonText: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
