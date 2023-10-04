import '../styles/ExperiencesItem.css'
import {PropTypes} from 'prop-types'
import { useState } from 'react'
import Button from './Button'
import Input from './Input'

function ExperiencesItem({dataId, focusedElement, handleEditClick, handleUpdateClick, handleDeleteClick}) {
  const [jobTitle, setJobTitle] = useState('Job title')
  const [company, setCompany] = useState('Company')
  const [jobDescription, setJobDescription] = useState('Example description')

  if (focusedElement === 0) {
    return(
      <div className='experiences-item'>
        <div className='experiences-item-date'>
          <p>Sept. 2023 -</p>
          <p>oct. 2023</p>
        </div>
        <div className='experiences-item-content'>
          <div className='experiences-item-header'>
            <h4 className='experiences-item-job-title'>{jobTitle}<span className='experiences-item-establishment'> {company}</span></h4>
          </div>
          <div className='experiences-item-description'>
            <p>{jobDescription}</p>
          </div>
        </div>
        <div className='experiences-item-buttons'>
          <Button buttonType={'edit'} handleClick={() => handleEditClick(dataId)} />
          <Button buttonType={'delete'} handleClick={() => handleDeleteClick(dataId)} />
        </div>
      </div>
    )
  } else if (focusedElement === dataId) {
    return(
      <div className='experiences-item'>
        <div className='experiences-item-date'>
          <p>Sept. 2023 -</p>
          <p>oct. 2023</p>
        </div>
        <div className='experiences-item-content'>
          <div className='experiences-item-header'>
            <Input category={'job-title'} value={jobTitle} handleChange={(e) => setJobTitle(e.target.value)} />
            <Input category={'company'} value={company} handleChange={(e) => setCompany(e.target.value)} />
          </div>
          <div className='experiences-item-description'>
            <Input type='textarea' category={'job-description'} value={jobDescription} handleChange={(e) => setJobDescription(e.target.value)} />
          </div>
        </div>
        <div className='button-wrapper'>
          <Button buttonType={'update'} handleClick={handleUpdateClick} />
        </div>
      </div>
    )
  } else {
    return(
      <div className='experiences-item'>
        <div className='experiences-item-date'>
          <p>Sept. 2023 -</p>
          <p>oct. 2023</p>
        </div>
        <div className='experiences-item-content'>
          <div className='experiences-item-header'>
            <h4 className='experiences-item-job-title'>{jobTitle}<span className='experiences-item-establishment'> {company}</span></h4>
          </div>
          <div className='experiences-item-description'>
            <p>{jobDescription}</p>
          </div>
        </div>
      </div>
    )
  }
}

ExperiencesItem.propTypes = {
  dataId: PropTypes.number,
  focusedElement: PropTypes.number,
  handleEditClick: PropTypes.func,
  handleUpdateClick: PropTypes.func,
  handleDeleteClick: PropTypes.func
}

export default ExperiencesItem;
