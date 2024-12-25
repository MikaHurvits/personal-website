import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Success from '../components/success';
import './Contact.css';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (!name) validationErrors.name = "Name is required";
        if (!email) validationErrors.email = "Email is required";
        else if (!validateEmail(email)) validationErrors.email = "Invalid email address";
        if (!message) validationErrors.message = "Message is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle form submission logic here
            console.log({ name, email, message });
            setErrors({});
            setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    if (success) {
        return <Success />;
    }




    return ( 
        <div className="contact">
            <Header/>
            <div className="contact-container">
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>

                    <span>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} required/>
                    {errors.name && <p className="error">{errors.name}</p>}
                    </span>

                    <span>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    {errors.email && <p className="error">{errors.email}</p>}
                    </span>

                    <span>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                    </span>

                {/* <div className='rate-website'>
                    <label>Rate my website:</label>
                    <input type='checkbox' name='5'/>
                    <input type='checkbox' name='4'/>
                    <input type='checkbox' name='3'/>
                    <input type='checkbox' name='2'/>
                    <input type='checkbox' name='1'/>
                </div> */}


                <button type="submit">Send</button>
            </form>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Contact;

    