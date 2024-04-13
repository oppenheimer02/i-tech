import React from 'react';
import img1 from '../images/repair.png';



function Galery() {
  return (
    <div id='gallerybox'>

      <h1>Gallery</h1>

<div className="imagess">
      <img className='image' src={img1}   />
      <img  className='image' src={img1}  />
      <img  className='image' src={img1}  />  
      <img  className='image' src={img1}  />
      <img  className='image' src={img1}  />  
  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img1}  /> 
      <img  className='image' src={img1}  />  
</div>
          
    </div>
  )
}

export default Galery;