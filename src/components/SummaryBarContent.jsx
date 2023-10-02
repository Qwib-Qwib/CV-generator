import '../styles/SummaryBarContent.css'
import PropTypes from 'prop-types'
import SummaryBarDescription from './SummaryBarDescription';
import SummaryBarTitle from './SummaryBarTitle';

function SummaryBarContent({focusedElement, handleProfessionEditClick, handleSummaryEditClick, handleUpdateClick}) {
  return (
    <div className="summary-bar-content">
      <SummaryBarTitle focusedElement={focusedElement} handleProfessionEditClick={handleProfessionEditClick} handleUpdateClick={handleUpdateClick} />
      <SummaryBarDescription focusedElement={focusedElement} handleEditClick={handleSummaryEditClick} handleUpdateClick={handleUpdateClick} />
    </div>
  )
}

SummaryBarContent.propTypes = {
  focusedElement: PropTypes.number,
  handleProfessionEditClick: PropTypes.func,
  handleSummaryEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func
};

export default SummaryBarContent;
