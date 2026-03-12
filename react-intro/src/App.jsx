import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

const App = () => {
  return (
    <div >
      <h1 className='heading'>Mohammad Faheem </h1>
      <p className='bio'>I am an English student who is passionate about learning and improving my knowledge of language and communication. I study English to better understand how the language works and how it is used in daily life. I am also interested in teaching and presenting ideas clearly, as shown by my preparation for a college-level demo lecture on the topic “What is English?”. In addition, I am learning web development and enjoy working with programming and modern technologies. I work on developing both my academic skills and technical abilities, which helps me grow personally and professionally.
      </p>
      <ul className='skills'>
      <h1>Skills</h1>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>React JS</li>
      </ul>
      <footer className='footer'>
        This is my first React assignment.
      </footer>
    </div>
  )
}

export default App

