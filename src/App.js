import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import ContactForm from './Components/ContactForm'
import {ParallaxProvider} from 'react-scroll-parallax'

function App() {

  return (
  <ParallaxProvider>
    <Header />
    <Hero />
    <ContactForm />
  </ParallaxProvider>
  );
}

export default App;
