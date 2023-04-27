import React from "react";
import emailjs from "emailjs-com";
import "./css/Contact.css";
const data = {
  TEMPLATE_ID: "template_rufd3hb",
  SERVICE_ID: "service_we8kibx",
  PUBLIC_KEY: "vVEwuxQ9mXYjZ8mpi",
};
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(data.SERVICE_ID, data.TEMPLATE_ID, e.target, data.PUBLIC_KEY)
      .then(
        (result) => {
          alert(
            "Thank you! I will shorly get in-touch with you! You can contact me on Linkedin too! Just DM me!"
          );
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form " onSubmit={sendEmail}>
      {process.env.SERVICE_ID}
      <h1>Contact Me</h1>
      <input type="hidden" name="contact_number" />
      <div className="input-wrap">
        <label>Name</label>
        <input placeholder="John Doe" type="text" name="from_name" />
      </div>
      <div className="input-wrap">
        <label>Your Email</label>
        <input placeholder="example@gmail.com" type="email" className="inp" name="from_email" />
      </div>
      <div className="input-wrap">
        <label>Message</label>
        <textarea placeholder="Enter your message..." className="inp" rows="5" name="html_message" />
      </div>
      <input className="submit" type="submit" value="Send" />
    </form>
  );
};

export default Contact;
