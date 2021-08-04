import React from 'react';
import ContactImage from './images/contact.jpg';

const Contact = () => {
    return (
        <div  className= "home" style={{
            backgroundImage: `url(${ContactImage})`,
            backgroundSize: "cover",
            height: "88vh"
        }}>
            

            <form  onsubmit="validateform()">
                <h1 className = "heading ">Get In Touch</h1>
                <div className="form-group">
                    <label >First Name:</label>
                    <input  id="fname" placeholder="firstname" />
                    </div>

                <div className="form-group">

                    <label>Last Name:</label>
                    <input id="lname" placeholder="lastname" />
                </div>
                <div className="form-group">
                    <label>Email     :</label>
                    <input id="email" name="email" placeholder="Valid Email" type="text"></input>
                </div>
                <div className="form-group">
                    <label>Phone    :</label>
                    <input id="contact" name="contact" placeholder="Contact No." type="text"></input>
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea id="msg" placeholder="message" />
                </div>
                <div className="form-group">

                    <button type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Contact;