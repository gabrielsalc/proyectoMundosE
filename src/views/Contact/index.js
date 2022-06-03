import {useState} from 'react';
import axios from 'axios';
import contactimage from '../../images/contact-image.png';
//import './style.css'

function Contact() {
    const [userInput, setUserInput] = useState({name: "", email: "", phone: "", message: ""})
    const [showAlert, setShowAlert] = useState(false)
    const handleChange = function (event) {
        setShowAlert(false)

        const property = event.target.id
        const value =  event.target.value
        setUserInput({...userInput, [property]: value})
    }

    const handleSubmit = function (event){
        event.preventDefault()
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: userInput
        }).then( result => {
            console.log(result)
            setShowAlert(true)
            setUserInput({name: "", email: "", phone: "", message: ""})
        })
        .catch( error => console.log(error))
    }

    return (
        <section id="greysection">
        <div id="greyerdiv">
        <div id="imagediv">
        <img id="contactimage" src={contactimage}></img>
        </div>
        <div id="formdiv">
        <h2 id="h2contact">Get in touch</h2>
        <h2 id="h2orangec">We are hiring!</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name"></label>
            <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={userInput.name}
            />
            </div>
            <div className="form-group">
            <label htmlFor="email"></label>
            <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={userInput.email}
            />
            </div>
            <div className="form-group">
            <label htmlFor="phone"></label>
            <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone"
                value={userInput.phone}

            />
            </div>
            <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
                onChange={handleChange}
                placeholder="Message"
                className="form-control"
                id="message"
                rows="3"
                value={userInput.message}
            ></textarea>
            </div>
            <button id="buttonform" type="submit" className="btn btn-primary submitForm">Send</button>
            
        </form>
        {showAlert && <div className="alert alert-success">Mensaje enviado correctamente</div>}
        
        </div>
        </div>
        </section>
  );
}

export default Contact;
