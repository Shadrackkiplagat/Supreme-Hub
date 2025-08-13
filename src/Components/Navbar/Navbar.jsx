import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <ul>
        <li>Home</li>
        <li>projects</li>
        <li>services</li>
        <li>Gallery</li>
        <li><button className='con-btn'>Contact us</button></li>
      </ul>
    </nav>
  );
}

export default Navbar
