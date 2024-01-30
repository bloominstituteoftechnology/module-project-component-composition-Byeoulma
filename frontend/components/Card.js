import React from 'react';
// import props to pass to parent
import PropTypes from 'prop-types'

function Card({ title, text, imageURL, date }) {
    return (
        <div className = 'card'>
        <h1>{ title }</h1>
        <figure>
          <img src={ imageURL } />
        </figure>
        <figcaption>Bots on the Moon { date }</figcaption>
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