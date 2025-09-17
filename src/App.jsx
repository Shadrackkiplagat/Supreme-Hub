import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Tittle from './Components/Tittle/Tittle'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/contact/contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tittle subtitle='OUR SERVICES' title='what we offer'/>
      <Services/>
      <About/>
       <Tittle subtitle='Gallery' title='Project photos'/>
      <Gallery/>
      <Tittle subtitle='Testimonials' title='What clients says'/>
      <Testimonials/>
      <Tittle subtitle='Contact us' title='Get in touch'/>
      <Contact/> 
          </div>
  )
}

export default App
