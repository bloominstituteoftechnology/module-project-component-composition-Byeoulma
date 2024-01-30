import React, { useState, useEffect } from 'react';
import Card from './Card'
import axios from 'axios';

// creating a variable to store NASA url API
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

console.log('App component has run');

function App() {
  // create our state
  const [apod, setApod] = useState()

  // Create a function to grab photo
  useEffect(() => {
    function fetchPhoto() {
      // using axios to get URL
      axios.get(url)
      .then(res => {
        console.log(res.data);
        setApod(res.data);
      })
      .catch(err => {
        console.log(err.message)
      })
    } 
    // invoke the function (turned off for now 💡)
    // fetchPhoto();

    setApod(
            {
              "copyright": "\nJAXA, \nTakara Tomy, \nSony Co., \nDoshisha U.\n",
              "date": "2024-01-30",
              "explanation": "New landers are on the Moon. Nearly two weeks ago, Japan's Smart Lander for Investigating Moon (SLIM) released two rovers as it descended, before its main lander touched down itself. The larger of the two rovers can hop like a frog, while the smaller rover is about the size of a baseball and can move after pulling itself apart like a transformer. The main lander, nicknamed Moon Sniper, is seen in the featured image taken by the smaller rover. Inspection of the image shows that Moon Sniper's thrusters are facing up, meaning that the lander is upside down from its descent configuration and on its side from its intended landing configuration.  One result is that Moon Sniper's solar panels are not in the expected orientation, so that powering the lander had to be curtailed and adapted.  SLIM's lander has already succeeded as a technology demonstration, its main mission, but was not designed to withstand the lunar night -- which starts tomorrow.",
              "hdurl": "https://apod.nasa.gov/apod/image/2401/Slim_jaxa_960.jpg",
              "media_type": "image",
              "service_version": "v1",
              "title": "SLIM Lands on the Moon",
              "url": "https://apod.nasa.gov/apod/image/2401/Slim_jaxa_960.jpg"
          }
          
    )
  }, []);

   // if statement if apod doesnt work
   if(!apod) return 'Fetching data...'
  return (
    <section>
      <Card 
      title={apod.title}
      text={apod.explanation}
      imageURL={apod.url}
      date={apod.date}
      />
    </section>
  )
}

export default App
