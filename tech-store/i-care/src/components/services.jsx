import React from 'react';
import ServiceBox from './serviceBox'; // Use lowercase 'serviceBox'
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
import img4 from '../images/image5.png';


import image1 from '../images/repair.png';

function Services() {
  return (
    <div id='services'>
      <h1>SERVICES</h1>
      <div className='serv'>
        <ServiceBox image={img1} text='NITENDO GAME CONSOLE REPAIRING' />
        <ServiceBox image={img2} text='Mobile Phone Repair' />
        <ServiceBox image={img3} text='REFURBISHED  PHONES WITH
 6 MONTHS WARRENTY' />
        <ServiceBox image={img4} text='Laptops REPAIRING' />
       
        
        
      </div>
    </div>
  );
}

export default Services;
