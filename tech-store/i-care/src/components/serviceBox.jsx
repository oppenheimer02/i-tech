import React from 'react';

function serviceBox(props) {
  return (
    <div id='servicebox'>
      <div className='box'>
        <img src={props.image} alt="Service Image" />
      </div>
        <h6>{props.text}</h6>
    </div>
  )
}

export default serviceBox;
