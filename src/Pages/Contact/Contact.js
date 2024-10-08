import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; // Import the CSS file

const ContactMe = () => {
    const [state, handleSubmit] = useForm("xanywanl");
    if (state.succeeded) {
        return <div className="mess"><p>Your message has been received</p></div>;
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Me</h2> {/* Heading for the form */}
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="validation-error" // Apply styling for validation error
            />
            <label htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                required
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="validation-error" // Apply styling for validation error
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default ContactMe;
