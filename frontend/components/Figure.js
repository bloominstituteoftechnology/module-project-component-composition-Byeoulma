import React from "react";
import styled from "styled-components";


export default function FigureImg ({ imageURL, date }) {
    return (
        <figure>
        <img src={ imageURL } />
      
      <figcaption>Bots on the Moon { date }</figcaption>
      </figure>
    )
}