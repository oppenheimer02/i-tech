import React from 'react';

function itemss(props) {
  return (
    <div id='itemsBox'>
      <div className='box1'>
        <img src={props.image} alt="Items Image" />
      </div>
        <h6>{props.text}</h6>
    </div>
  )
}

export default itemss;