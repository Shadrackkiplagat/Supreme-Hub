import React from 'react'
import './Services.css'
import interiorhouse3 from '../../assets/interiorhouse3.jpg'
import landscaping from '../../assets/landscaping.jpg'
import house3 from '../../assets/house3.jpg'
const Services = () => {
  return (
    
    <div className='services-container'>
       <h1></h1>
       <div className='services-text'>
      <img src={house3} alt='service-icon' />
      <div className='caption'>
      <p>Building Construction</p>
      </div>
       </div> 
        <div className='services-text'>
      <img src={interiorhouse3} alt='service-icon' />
      <div className='caption'>
      <p>Interior Design</p>
      </div>
       </div> 
        <div className='services-text'>
      <img src={landscaping} alt='service-icon' />
      <div className='caption'>
      <p>Landscaping</p>
      </div>
       </div> 
    </div>
  )
}

export default Services
