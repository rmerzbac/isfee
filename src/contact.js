import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the email using EmailJS
    emailjs
      .send(
        'default_service', // Use the default email service
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_email: email,
          message: message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );

    setEmail('');
    setMessage('');
  };

  return (
    <div className="body">
    <form onSubmit={handleSubmit}>
      <p>This form is to contact <b><a href="https://reidmerzbacher.com">Reid Merzbacher</a></b>, the site's developer. Please get in touch about any bugs, feature requests, or questions.</p>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default EmailForm;
