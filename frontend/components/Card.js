import React from 'react';
// import props to pass to parent
import PropTypes from 'prop-types'
import Figure from './Figure'
import styled from 'styled-components';


const StyledCard = styled.div `
color: white;
background-color: #0A0A0A;
border-radius: 30px;
margin: auto;
width: 70%;
padding: 10px;
box-shadow: 1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue;

h1 {
  color: white;
  text-align: center;
  font-size: 40px;
  text-shadow: 1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue;
}

p {
  font-family: monospace;
  font-size: 14px;
  text-shadow: #E7E7E7 1px 0 5px;
}

figcaption {
  text-shadow: #E7E7E7 1px 0 5px;
  font-size: 10px;
  text-align: center;
}

img {
  opacity: 50%;
}
img:hover {
  opacity: 100%;
}
`

function Card({ title, text, imageURL, date }) {
    return (
        <StyledCard className = 'card'>
        <h1>{ title }</h1>
        <Figure
        imageURL={imageURL}
        date={date}
        />
        <p>
          { text}
        </p>
      </StyledCard>
    )
}
// the proptypes
Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imageURL: PropTypes.string,
  date: PropTypes.string,
};

export default Card