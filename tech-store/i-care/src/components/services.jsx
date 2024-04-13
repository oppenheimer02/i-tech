import React from 'react';
import ServiceBox from './serviceBox'; // Use lowercase 'serviceBox'


import image1 from '../images/repair.png';

function Services() {
  return (
    <div id='services'>
      <h1>SERVICES</h1>
      <div className='serv'>
        <ServiceBox image={image1} text='hello' />
        <ServiceBox image={image1} text='hello uuyhjjnkb ibuugu' />
        <ServiceBox image={image1} text='tttthhhhggggggggg' />
        <ServiceBox image={image1} text='hello' />
        <ServiceBox image={image1} text='hello' />
        <ServiceBox image={image1} text='hello' />
        
        
      </div>
    </div>
  );
}

export default Services;
