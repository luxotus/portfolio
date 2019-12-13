import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact-wrapper">
        <div className="inner-wrapper left">
          <h2>Let&apos;s get in touch</h2>
          <form>
            <div className="group">
              <label htmlFor="contact-name">Name</label>
              <input type="text" name="name" id="contact-name" />
            </div>

            <div className="group">
              <label htmlFor="contact-email">Email</label>
              <input type="email" name="email" id="contact-email" />
            </div>

            <div className="group">
              <label htmlFor="contact-subject">Subject</label>
              <input type="text" name="subject" id="contact-subject" />
            </div>

            <div className="group active">
              <label htmlFor="contact-message">Message</label>
              <textarea name="" id="contact-message" cols="30" rows="10" />
            </div>
          </form>
        </div>
        <div className="inner-wrapper right">
          <div className="item">
            <h4>Location</h4>
            <p>
              301 Cannan Dr,
              <br />
              Angleton, TX
              <br />
              77515
            </p>
          </div>
          <div className="item">
            <h4>Available Hours</h4>
            <p>
              301 Cannan Dr,
              <br />
              Angleton, TX
              <br />
              77515
            </p>
          </div>
          <div className="item">
            <h4>Contact</h4>
            <p>hello@felixmanuel.com</p>
          </div>
        </div>
      </div>
    );
  }
}
