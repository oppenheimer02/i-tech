import React from "react";
import itemss from "./Itemss";
import img6 from '../images/images6.png';
import img7 from '..images/image7.png';





function items() {
    return(
        <div id="pricing">
        <h1>Select Your Device</h1>
        <div id="item">
        <items image = {img6} text = 'Phones'/>
        <items image = {img7} text = 'Tablets'/>
      
        </div>
        </div>
    )
    
}

import refurbished from '../images/refurbished.png';

function Infosection() {
  return (
    <div id='infosection'>

      <div className='ig'>
        <img src={refurbished}  />
      </div>
      <div className='text'>
        <h1>GET A PHONE AT HALF THE PRICE</h1>
        <p>Get a refubrished smartphone at half the price of top mobile brands such as OnePlus, Xiaomi/Redmi, Realme, Vivo, Oppo, Samsung and many more. All refubrished mobiles are tested and certified by our technical experts. We have large collection of certified refurbished android mobile phones at itech care store. you can choose it from wide range of branded phones at 50% cut-rate prices. If you are looking for a good condition refubrished mobile you can review at our service centers. We also provide 6 months service warranty on all refurbished cell phones.</p>
      </div>
      
    </div>
  )
}

export default Infosection