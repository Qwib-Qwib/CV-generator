import '../styles/Button.css'
import PropTypes from 'prop-types'

function defineDefaultInnerText(buttonType) {
  switch (buttonType) {
    case 'edit':
      return 'Modifier'
    case 'update':
      return 'Accepter'
    case 'delete':
      return 'Effacer'
    default:
      return buttonType.slice(0, 1).toUpperCase() + buttonType.slice(1);
  }
}

function Button({buttonType, buttonText = defineDefaultInnerText(buttonType), handleClick}) {
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
