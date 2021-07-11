import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [fromState, setFromState]= useState({name: '', email: '', message: ''});
    const { name, email, message }= fromState;
    const [errorMessage, setErrorMessage]= useState('');

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid= validateEmail(event.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                if (!event.target.value.length) {
                    setErrorMessage(`${event.target.name} is required`);
                }
                else {
                    // console.log(event.target.value)
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFromState({...fromState, [event.target.name]: event.target.value});
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(fromState);
    };

    return(
        <section>
            <h1>Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} name="name" onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;