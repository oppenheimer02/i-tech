import React from 'react';

function serviceBox(props) {
  return (
    <div id='servicebox'>
      <div className='box'>
        <img src={props.image} alt="Service Image" />
      </div>
        <h5>{props.text}</h5>
    </div>
  )
}

export default serviceBox;
