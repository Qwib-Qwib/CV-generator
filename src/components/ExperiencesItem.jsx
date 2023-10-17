import '../styles/ExperiencesItem.css';
import {PropTypes} from 'prop-types';
import { useState, useEffect } from 'react';
import useDisableDatesOutsideRange from '../hooks/useDisableDatesOutsideRange';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';
import Button from './Button';
import Input from './Input';

function ExperiencesItem({dataId, focusedElement, handleEditClick, handleUpdateClick, handleDeleteClick}) {
  const date = new Date;
  const formatter = Intl.DateTimeFormat('fr-FR', {month: 'short'});

  const [jobTitle, setJobTitle] = useState('Titre de rôle ou diplôme');
  const [company, setCompany] = useState('Entité');
  const [jobDescription, setJobDescription] = useState("Description de l'expérience");
  const [selectedStartMonthData, setSelectedStartMonthData] = useState({
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    monthShortName: formatter.format(date)
  });
  const [isStartPickerOpen, setIsStartPickerOpen] = useState(false);
  const [selectedEndMonthData, setSelectedEndMonthData] = useState({
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    monthShortName: formatter.format(date)
  });
  const [isEndPickerOpen, setIsEndPickerOpen] = useState(false);
  const [isJobOngoing, setIsJobOngoing] = useState(false);

  const updateButton = (
    <div className='update-button-wrapper'>
      <Button buttonType={'update'} handleClick={handleUpdateClick} />
    </div>
  )

  const neutralButtons = (
    <div className='common-buttons-wrapper'>
      <Button buttonType={'edit'} handleClick={() => handleEditClick(dataId)} />
      <Button buttonType={'delete'} handleClick={() => handleDeleteClick(dataId)} />
    </div>
  )

  const dateEdition = (
    <>
      <MonthInput selected={selectedStartMonthData} setShowMonthPicker={setIsStartPickerOpen} showMonthPicker={isStartPickerOpen} lang='fr' size='small' />
      {isStartPickerOpen ? <MonthPicker setIsOpen={setIsStartPickerOpen} selected={selectedStartMonthData} size='small' onChange={setSelectedStartMonthData} lang='fr' /> : null}
      <MonthInput selected={selectedEndMonthData} setShowMonthPicker={setIsEndPickerOpen} showMonthPicker={isEndPickerOpen} lang='fr' size='small' />
      {isEndPickerOpen ? <MonthPicker setIsOpen={setIsEndPickerOpen} selected={selectedEndMonthData} size='small' onChange={setSelectedEndMonthData} lang='fr' /> : null}
      <div className='ongoing-checkbox-wrapper'>
        <input type="checkbox" id='ongoing' onClick={handleOngoingCheckbox} defaultChecked={isJobOngoing}/>
        <label htmlFor="ongoing">En cours ?</label>
      </div>
    </>
  )

  const dateReadOnly = (
    <>
      <p>{selectedStartMonthData.monthShortName[0].toUpperCase() + selectedStartMonthData.monthShortName.slice(1) + ' ' + selectedStartMonthData.year} -</p>
      {isJobOngoing ? <p>En cours</p> : <p>{selectedEndMonthData.monthShortName + ' ' + selectedEndMonthData.year}</p>}
    </>
  )

  const headersWithInputs = (
    <div className='experiences-item-header with-inputs'>
      <Input category={'job-title'} value={jobTitle} handleChange={(e) => setJobTitle(e.target.value)} />
      <Input category={'establishment'} value={company} handleChange={(e) => setCompany(e.target.value)} />
    </div>
  )

  const headersReadOnly = (
    <div className='experiences-item-header'>
      <h4 className='experiences-item-job-title'>{jobTitle}<span className='experiences-item-establishment'> ({company})</span></h4>
    </div>
  )

  // Necessary to customize the behaviour of react-lite-month-picker without forking and editing the package directly.
  useEffect(() => {
    if (focusedElement === dataId) {
      const monthInputs = document.querySelectorAll('._monthInputField_f6ece_1');
      const firstInput = monthInputs[0];
      firstInput.innerText = selectedStartMonthData.monthShortName[0].toUpperCase() + selectedStartMonthData.monthShortName.slice(1) + ' ' + selectedStartMonthData.year;
      const secondInput = monthInputs[1];
      secondInput.innerText = selectedEndMonthData.monthShortName + ' ' + selectedEndMonthData.year;
      (isStartPickerOpen || isJobOngoing) ? secondInput.disabled = true : secondInput.disabled = false;
      isEndPickerOpen ? firstInput.disabled = true : firstInput.disabled = false;
    }
  }, [focusedElement, dataId, isJobOngoing, selectedStartMonthData, selectedEndMonthData, isStartPickerOpen, isEndPickerOpen]);

  useDisableDatesOutsideRange(focusedElement, dataId, selectedStartMonthData, selectedEndMonthData, isStartPickerOpen, isEndPickerOpen);

  function handleOngoingCheckbox() {
    setIsJobOngoing(!isJobOngoing);
  }

  return(
    <div className={focusedElement === 0 ? 'secondary-neutral experiences-item' : 'experiences-item'}>
      <div className='experiences-item-date'>
        {focusedElement === dataId ? dateEdition : dateReadOnly }
      </div>
      <div className='experiences-item-content'>
        {focusedElement === dataId ? headersWithInputs : headersReadOnly}
        <div className='experiences-item-description'>
          {focusedElement === dataId ? <Input type='textarea' category={'job-description'} value={jobDescription} handleChange={(e) => setJobDescription(e.target.value)} /> : <p>{jobDescription}</p> }
        </div>
      </div>
      {focusedElement === dataId ? updateButton : null }
      {focusedElement === 0 ? neutralButtons : null }
    </div>
  )
}

ExperiencesItem.propTypes = {
  dataId: PropTypes.number,
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func,
  handleDeleteClick: PropTypes.func
}

export default ExperiencesItem;
