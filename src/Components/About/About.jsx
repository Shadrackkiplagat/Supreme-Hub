import React from 'react'
import './About.css'
import interiorhouse3 from '../../assets/interiorhouse3.jpg'
const About = () => {
  return (
    <div className='about-container '>
      <div className='about-left'>
        <img src={interiorhouse3} alt='about' />
      </div>
        <div className='about-right'>
        <h2>About Us</h2>
        <h3>Crafting better structures for better life </h3>
        <p>
          We are a reliable and professional construction company specializing in building, carpentry, and custom furniture. With skilled craftsmanship and a detail-oriented approach, we deliver durable, high-quality, and aesthetically pleasing results. Our experienced and versatile team combines traditional techniques with innovative design to create functional, elegant, and modern spaces. Committed to safety, sustainability, and client satisfaction, we ensure every project is executed with precision, efficiency, and care. From structural work to fine furniture, we provide timely, organized, and trustworthy service tailored to your unique needs.</p>
        </div>
    </div>
  )
}

export default About
