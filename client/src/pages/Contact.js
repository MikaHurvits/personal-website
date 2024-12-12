import Footer from '../components/Footer';
import Header from '../components/Header';
import './Contact.css';

const Contact = () => {
    return ( 
        <div className="contact">
            <Header/>
            <div className="contact-container">
            <h1>Contact Me</h1>
            <form className="contact-form">
                    <span>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                    </span>
                    <span>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                    </span>
                    <span>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
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

    