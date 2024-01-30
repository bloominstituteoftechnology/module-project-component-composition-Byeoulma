import React from 'react';
// import props to pass to parent
import PropTypes from 'prop-types'
import Figure from './Figure'

function Card({ title, text, imageURL, date }) {
    return (
        <div className = 'card'>
        <h1>{ title }</h1>
        <Figure
        imageURL={imageURL}
        date={date}
        />
        <p>
          { text}
        </p>
      </div>
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