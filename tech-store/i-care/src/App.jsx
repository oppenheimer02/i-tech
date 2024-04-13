import React from 'react'
import './App.css'
import Header from './components/Header';
import Services from './components/services';
import About from './components/About';
import Infosection from './components/Infosection';
import Contact from './components/Contact';
import Galery from './components/Galery';
import Footer from './components/Footer';


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

    </div>
  )
}

export default App;