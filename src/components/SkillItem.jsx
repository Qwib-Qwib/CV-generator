import '../styles/SkillItem.css'
import { useState } from 'react'
import Button from './Button';

function SkillItem() {
  const [skill, setSkill] = useState('skill');

  return(
    <li>
      {skill}
      {/* <Button buttonType={'edit'} handleClick={} />
      <Button buttonType={'edit'} handleClick={} /> */}
    </li>
  )
}

export default SkillItem;
