import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;

    return (
      <div className="contact-wrapper">
        <div className="center-wrapper">
          <div className="inner-wrapper left">
            <h2>Let&apos;s get in touch</h2>
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/xwklzndr"
              method="POST"
              className="contact-form"
            >
              <div className="group">
                <label htmlFor="contact-email">Your Email</label>
                <input type="email" name="_replyto" id="contact-email" />
              </div>
              <div className="group active">
                <label htmlFor="contact-message">Message</label>
                <textarea name="message" id="contact-message" />
              </div>
              <div className="group">
                <input type="hidden" name="_subject" value="Portfolio - Submission" />
                <button type="submit" value="Send" className="btn">Send Message</button>
                <p className={(status === 'SUCCESS' ? 'success-message fade-out' : 'success-message hide')}>Sent!</p>
                <p className={(status === 'ERROR' ? 'error-message' : 'error-message hide')}>Oops! There was a problem.</p>
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
                Monday - Saturday
                <br />
                10am - 6pm
                <br />
                <br />
                Sunday
                <br />
                12pm - 4pm
              </p>
            </div>
            <div className="item">
              <h4>Contact</h4>
              <p>hello@felixmanuel.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
