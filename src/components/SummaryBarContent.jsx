import '../styles/SummaryBarContent.css'
import SummaryBarDescription from './SummaryBarDescription';
import SummaryBarTitle from './SummaryBarTitle';

function SummaryBarContent() {
  return (
    <div className="summary-bar-content">
      <SummaryBarTitle />
      <SummaryBarDescription />
    </div>
  )
}

export default SummaryBarContent;
