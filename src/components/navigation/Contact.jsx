import { useState } from 'react';
import './Contact.css';

const formEndpoint = 'https://formspree.io/f/meoanyej';
const phoneNumber = '+250 786 072 607';
const dialNumber = phoneNumber.replaceAll(' ', '');

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function sendMessage(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.name = data.name.trim();
    data.message = data.message.trim();

    if (!data.name || !data.message) {
      const field = form.elements.namedItem(data.name ? 'message' : 'name');
      field.setCustomValidity(data.name ? 'Enter a message.' : 'Enter your name.');
      field.reportValidity();
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  function clearFieldError(event) {
    event.target.setCustomValidity('');
  }

  return (
    <section id="contact" className="contact-section" tabIndex={-1} aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-invitation">
          <h2 className="section-title" id="contact-title">Let’s <span>talk.</span></h2>
          <p>Have a project in mind or want to work together?</p>
          <a className="contact-email" href="mailto:fabrice@haguma.com">
            fabrice@haguma.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-phone-actions">
            <a className="button button-outline" href={`tel:${dialNumber}`}>
              Call {phoneNumber}
            </a>
            <a className="button button-outline" href={`https://wa.me/${dialNumber.slice(1)}`} target="_blank" rel="noreferrer">
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <form action={formEndpoint} method="post" className="contact-form" onSubmit={sendMessage}>
          <fieldset disabled={status === 'sending'}>
            <div className="contact-fields">
              <label>
                Name
                <input name="name" autoComplete="name" required onInput={clearFieldError} />
              </label>
              <label>
                Email
                <input type="email" name="email" autoComplete="email" pattern=".+@.+[.].+" required />
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows="4" required onInput={clearFieldError} />
            </label>
            <button className="button button-accent" type="submit">
              {status === 'sending' ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span>
            </button>
          </fieldset>
          <p className="form-status" role="status">
            {status === 'sent' && 'Message sent. Thanks for getting in touch.'}
            {status === 'error' && 'I couldn’t receive your message. Try again or email me directly.'}
          </p>
        </form>
      </div>
    </section>
  );
}
