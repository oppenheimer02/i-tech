import React from 'react';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
import img4 from '../images/image4.png';



function Galery() {
  return (
    <div id='gallerybox'>

      <h1>Gallery</h1>

<div className="imagess">
      <img className='image' src={img1}   />
      <img  className='image' src={img1}  />
      <img  className='image' src={img3}  />  
      <img  className='image' src={img4}  />
      <img  className='image' src={img2}  />  
  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img3}  />  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img1}  />  
      <img  className='image' src={img4}  /> 
      <img  className='image' src={img1}  />  
</div>
          
    </div>
  )
}

export default Galery;