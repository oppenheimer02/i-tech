import React from 'react'
import './App.css'
import Header from './components/Header';
import Services from './components/services';
import About from './components/About';
import Infosection from './components/Infosection';
import Contact from './components/Contact';
import Galery from './components/Galery';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Itemss from './components/Itemss';


function App() {
  return (
    <div id='App'>
      <Header/>
      <Services/>
      <About/>
      <Infosection/>
     <Contact/>
     <Galery/>
     <Footer/>
     <Pricing/>
     <Itemss/>

    </div>
  )
}

export default App;