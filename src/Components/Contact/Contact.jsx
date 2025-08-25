import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png' 
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import Title from '../Title/Title'


function Contact() {

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93e7159f-135c-4dfe-890c-f146e746dedd");
    

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
    <div>
    <Title subTitle='Contact us' title='Get in Touch'/>
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below.
            Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to 
            our community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />allofusaresmart2@gmail.com </li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890 </li>
            <li><img src={location_icon} alt="" />34 Ramkhamhaeng 30, Hua Mak <br/>Bangkok,Thailand </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type='tel' name='phone num' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    <Title subTitle='Our Location' title='Find us on the map'/>
    <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.426394294243!2d100.61785361483079!3d13.75296999034793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f7a82c5b4a5%3A0x7b2d4a3b6a3b6a3b!2sRamkhamhaeng%2030!5e0!3m2!1sen!2sth!4v1621478893305!5m2!1sen!2sth" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
    </div>
    </div>
  )
}

export default Contact;
