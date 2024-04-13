import React from 'react';
import video from '../images/7640070.mp4'

function About() {
  return (
    <div id='about'>
      <h1>About Us</h1>
      <div id='about-section'>

        <div className='mp4'>
          <video src={video} autoPlay muted type="video/mp4" />
        </div>
        <div>
          <p>
          Welcome to <b>I-Tech Care</b>, your premier destination for top-quality technology solutions. Situated at <b>139 Trafalgar Road in Greenwich, London</b>, our expertise  in the sells ,repair and exchange of mobile phones, tablets, and laptops.We provide training for Tech Repair  Enthusiasts. At I-Tech Care, we are committed to excellence in every aspect of our services. Our team ensures that your devices are no just repaired but revitalized, contributing to a sustainable tech life by reducing the carbon footprint.We purchase phones in any condition and uphold the highest standards in our repairs, all backed by a solid <b>6-month fitting</b>.
Revive your old devices sustainably with I-Tech Care where quality meets responsibility.
          </p>
        </div>

      </div>
      


    </div>
  )
}

export default About


