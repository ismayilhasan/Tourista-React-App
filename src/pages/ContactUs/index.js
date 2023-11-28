import React from "react";
import './style.scss'
function ContactUs() {
  return (
    <>
    <section id="ContactHero" className="contact-container">
      <div className="text-area">
        <h1 className="title">Contact Us</h1>
        <div className="sub-title">
          Trips you couldn't plan, even if you wanted to.
        </div>
      </div>
    </section>

    <section id="Info">
        <div className="left-side">
            <h2 className="info-heading">Commercial Contacts</h2>
            <div className="contact-advertise">
                <p>To advertise on Tourista:</p>
                <p className="mails">advertise@tourista.com</p>
            </div>
            <div className="contact-affialte">
                <p>To become of an affilaete partner</p>
                <p className="mails">affilaete@tourista.com </p>
            </div>
            <div className="contact-advertise">
                <p>To advertise on Tourista:</p>
                <p className="mails">advertise@tourista.com</p>
            </div>
            <div className="contact-experince">
                <p>To become of an affilaete partner</p>
                <p className="mails">experince@tourista.com </p>
            </div>
        </div>
        <div className="right-side">
            <div className="content-contact">
                <h3 className="info-heading">Content Contact</h3>
                <p>To report an issue to our content teams please contact: </p>
                <p className="mails">corrections@tourista.com</p>
            </div>
            <div className="press-contact">
                <h3 className="info-heading">Press Contact</h3>
                <p>If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office: </p>
                <p className="mails">pr@tourista.com</p>
            </div>
            <div className="partnership-contact">
                <h3 className="info-heading">Partnership Contact</h3>
                <p>for Partnership opportunuties</p>
                <p className="mails">partnership@tourista.com</p>
            </div>
        </div>
    </section>
    </>
  );
}

export default ContactUs;
