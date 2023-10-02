import '../styles/SummaryBar.css'
import PropTypes from 'prop-types';
import SummaryBarContent from './SummaryBarContent';

function SummaryBar({focusedElement, handleProfessionEditClick, handleSummaryEditClick, handleUpdateClick}) {
  return (
    <div className="summary-bar">
      <SummaryBarContent focusedElement={focusedElement} handleProfessionEditClick={handleProfessionEditClick} handleSummaryEditClick={handleSummaryEditClick} handleUpdateClick={handleUpdateClick} />
    </div>
  )
}

SummaryBar.propTypes = {
  focusedElement: PropTypes.number,
  handleProfessionEditClick: PropTypes.func,
  handleSummaryEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SummaryBar;
