import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import {ParallaxProvider} from 'react-scroll-parallax'

function App() {

  return (
  <ParallaxProvider>
    <Header />
    <Hero />
  </ParallaxProvider>
  );
}

export default App;
