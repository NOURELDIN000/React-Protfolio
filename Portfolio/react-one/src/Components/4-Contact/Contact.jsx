import './Contact.css'
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("xvojywgw");
  return (
    <section className="contact-us flex" style={{justifyContent: "space-between"}}>
      <div>
      <h1 className="title">
        <span className="icon-envelope"></span> Contact Us
      </h1>
      <p className="sub-title">
        
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <form className="flex" onSubmit={handleSubmit}     >
        <div className='flex' style={{width:"100%"}}>
            <label htmlFor="email">Email address:</label>
            <input required autoComplete='off' type="email" name="email" id="email"></input> 
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
        <div style={{marginTop: "24px", width: "100%"}} className='flex'>
            <label htmlFor="message">Your Message:</label>
            <textarea required id="message" name="message"></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
        <button  className='submit'   disabled={state.submitting}  >{state.submitting ? "submitting..." : "submit"}</button>
        {state.succeeded && (
            <p
              className="flex contact-p"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
              
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
      </form>
      </div>
      <div className='animation '> <Lottie
                className='contact-animation'
                style={{ height: 355 }}
                animationData={contactAnimation}
              /></div>
    </section>
  );
}

export default Contact;
