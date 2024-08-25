import React from 'react'
import Typewriter from 'typewriter-effect';
const Type = () => {
  return (
    <Typewriter
    options={{
      strings: [
        "Student",
        "Software Developer",
        "MERN Stack Developer",
        "Open Source Contributor",
       
        
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  )
}

export default Type