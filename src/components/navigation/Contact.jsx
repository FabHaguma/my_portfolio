// src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [errors, setErrors] = useState({});

  const formspreeEndpoint = 'https://formspree.io/f/meoanyej';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus('validation_error');
      return;
    }

    setFormStatus('submitting');
    setErrors({});

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const data = await response.json();
        if (data.errors) {
          // Handle Formspree specific errors if any
          const serverErrors = data.errors.reduce((acc, err) => {
            acc[err.field || 'general'] = err.message;
            return acc;
          }, {});
          setErrors(serverErrors);
          setFormStatus('error');
        } else {
          setFormStatus('error');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="page-section contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        Have a project in mind, a question, or just want to say hi?
        Feel free to reach out! I'm always open to discussing new opportunities and collaborations.
      </p>

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            className={errors.message ? 'input-error' : ''}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <div className="form-status">
          {formStatus === 'submitting' && <p className="status-message submitting">Sending your message...</p>}
          {formStatus === 'success' && (
            <p className="status-message success">
              Message sent successfully! Thanks for reaching out. I'll get back to you soon.
            </p>
          )}
          {formStatus === 'error' && (
            <p className="status-message error">
              Oops! Something went wrong. Please try again or contact me directly via LinkedIn.
              {errors.general && <><br/>Error: {errors.general}</>}
            </p>
          )}
           {formStatus === 'validation_error' && (
            <p className="status-message error">
              Please correct the errors above.
            </p>
          )}
        </div>

        <button type="submit" className="submit-button" disabled={formStatus === 'submitting'}>
          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;