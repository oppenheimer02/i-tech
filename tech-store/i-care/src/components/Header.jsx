import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import repairImage from '../images/repair.png';



function Header() {

  const [text, setText] = useState('');
  const fullText = "You break,We collect, We fix";
  const typingSpeed = 220; // Adjust typing speed (in milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText]);



  return (
    <div id='main'>
      <Navbar/>
      <div id='hero'>

<div className='name'>
  <h1>
    <span> {text} </span>
  </h1>
  <a href='#contact' className='cv-btn'>BOOK NOW</a>
   </div>

    <div className='imag'>
      
    <img src={repairImage} />


    </div>
      </div>
      <div id='specs'>

    <button> Skilled Technician</button>
<button>Best smartphone repair center in town </button>
    <button> 90 days warranty </button>
      </div>

    </div>
  )
}

export default Header;