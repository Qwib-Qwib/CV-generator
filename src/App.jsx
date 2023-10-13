import './App.css'
import Resume from './components/Resume'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Button from './components/Button'

function App() {
  const printRef = useRef();

  async function handleDownloadingPDF() {
    const element = printRef.current;
    const canvas = await html2canvas(element, {scale: 3});
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  }

  return (
    <>
      <Button buttonType={'download'} buttonText={'Télécharger PDF'} handleClick={handleDownloadingPDF} />
      <div ref={printRef}><Resume /></div>
    </>
  )
}

export default App
