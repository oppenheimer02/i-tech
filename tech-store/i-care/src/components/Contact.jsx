import React from 'react'



export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "deca50b0-5e76-42a8-93fc-d789f43f6507");

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
    <div id='contact'>
    
    <h1> Contact Us  </h1>

    <div id='contact-section'>
    <div className="contact-input">
        <h2>Contact Us</h2>
        <form className='form1' onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="deca50b0-5e76-42a8-93fc-d789f43f6507" />
            <input type="text" name='Name' id="Name" placeholder="Your Name" required />
            <input className='email' name='email' type="email" id="email" placeholder="example@gmail.com" required />
            <input type="tel" name="phone" id="phone" placeholder="Phone Number" required />
            <input type="date" name="booking_date" id="booking_date" placeholder="Booking Date" required />
            <textarea id="Message" rows="6" placeholder="Your Message" name='Message' required></textarea>
            <button className='contact-btn' type="submit">Submit Form</button>
            <p><b>WE WILL CONTACT YOU SOON</b></p>
        </form>
        <span>{result}</span>
    </div>


      <div id='locate'>
        <h2>Locate Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.2091744070894!2d0.0035030513730517324!3d51.484909922795495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a91b1c3ab4a1%3A0xc32b6bce82bf274f!2sI-Tech%20Care!5e0!3m2!1sen!2snp!4v1712926187665!5m2!1sen!2snp" width="500" height="437"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      

      </div>

     </div>
   </div>
  );
}