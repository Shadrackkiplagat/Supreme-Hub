import React from 'react'
import './Contact.css'
import messageicon from '../../Assets/messageicon.png'
import phoneicon from '../../Assets/phoneicon.png'
import mailicon from '../../Assets/mailicon.png'
import locationicon from '../../Assets/location.png'
const contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2063a6b0-8177-4591-bacc-ad21c67c1387");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact-container'>
      <div className='contact-form'>"   
      <h3>Send us a message <img src={messageicon} alt ="" className='msgicon' /></h3>
        <p>
            If you have any questions or would like to get in touch, please fill out the form below and we will get back to you as soon as possible.Your feedback,questions and suggestions are important to us as we strive to provide exeptional service to our community.</p>
      <ul>
        <li><img src={mailicon} alt="" />SupremeCompany@gmail.com</li>
        <li><img src={phoneicon} alt="" />+254 700 000 000</li>
        <li> <img src={locationicon} alt="" />77 Flax, Kaptagat <br/>Eldoret,Kenya</li>
      </ul>
      </div>
      <div className='contact-form'>"   
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder='Your Name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Your Email' required />
          <label>Subject</label>
          <input type="text" placeholder='Subject' required /> 
          <label>Your Message</label>       
          <textarea rows="6" placeholder='Write your Message here' required></textarea>
          <button type="submit" className='send-btn'>Send Message</button>
        </form>
        <div className='sending'>
           <span>{result}</span>
        </div>
       
      </div>
    </div>
  )
} 

export default contact
 