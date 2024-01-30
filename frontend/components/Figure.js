import React from "react";

export default function FigureImg ({ imageURL, date }) {
    return (
        <figure>
        <img src={ imageURL } />
      
      <figcaption>Bots on the Moon { date }</figcaption>
      </figure>
    )
}