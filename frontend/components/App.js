import React, { useState, useEffect } from 'react';

// creating a variable to store NASA url API
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';

console.log('App component has run');

function App() {

  // Create a function to grab photo
  useEffect(() => {
    function fetchPhoto() {
      
    }
  })



  return (
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  )
}

export default App
