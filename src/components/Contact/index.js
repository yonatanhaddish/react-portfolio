import React, { useState } from 'react';


function Contact() {
    const [fromState, setFromState]= useState({name: '', email: '', message: ''});
    const { name, email, message }= fromState;
    const [errorMessage, setErrorMessage]= useState('');
    return(
        <section>
            <h1>Contact</h1>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} name="name"></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" defaultValue={email} name="email"></input>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" defaultValue={message}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;