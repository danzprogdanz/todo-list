import React from 'react'
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';


const Contacts = () => {
  return (
    <div className='ctt-wrapper'>
        <div class='git-icon-div'><a href='https://github.com/danzprogdanz' target='_blank' rel="noreferrer"><BsGithub className='ctt-icon'/></a></div>
        <div class='lkd-icon-div'><a href='https://www.linkedin.com/in/daniel-viana-a6bb59174/' target='_blank' rel="noreferrer"><BsLinkedin className='ctt-icon'/></a></div>
    </div>
  )
}

export default Contacts