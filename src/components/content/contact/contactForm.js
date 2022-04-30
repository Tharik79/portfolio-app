import React, { useRef} from "react";
import './contactForm.css';
import emailjs from '@emailjs/browser';





const ContactForm = () => {

  

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2npq5g7', 'template_og94czi', form.current, 'l4ikDkgvwPNnXY2HU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

    return (
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="username"/>
          <label>Email</label>
          <input type="email" name="user_email" placeholder="email"/>
          <label>Message</label>
          <textarea name="message" placeholder="message"/>
          <input type="submit" value="Send" />
        </form>
        {/* <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">
                        name
                    </label>
                    <input type="text" id="name" name="name" value={name} 
                        onChange = {(e) => setName(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="email">
                         email
                    </label>
                    <input type="text" id="email" email="email" value={email} 
                        onChange = {(e) => setEmail(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        message
                    </label>
                    <textarea type="text" id="message" message="message" value={message} 
                        onChange = {(e) => setMessage(e.target.value)} />

                </div>
                <button className="btn btn-dark" type="submit">Submit</button>
            </form> */}
      </div>
    );
}
export default ContactForm;