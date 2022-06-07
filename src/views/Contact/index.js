import {useState} from 'react';
import axios from 'axios';
import contactimage from '../../images/contact-image.png';
//import './style.css'

function Contact() {
    const [userInput, setUserInput] = useState({name: "", email: "", precio: "", descripcion: ""})
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
            url: 'https://proyectomundose.herokuapp.com/api/productos',
            method: 'POST',
            data: userInput
        }).then( result => {
            console.log(result)
            setShowAlert(true)
            setUserInput({name: "", email: "", precio: "", descripcion: ""})
        })
        .catch( error => console.log(error))
        setShowAlert(true)
    }

    return (
        <section id="greysection" className="container-fluid">
        <div id="greyerdiv" className="container-fluid principal">
        <div id="imagediv" className="container-fluid principal">
        <img id="contactimage" src={contactimage}></img>
        </div>
        <div id="formdiv" className="container-fluid principal">
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
            <label htmlFor="precio"></label>
            <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="precio"
                placeholder="Phone"
                value={userInput.precio}

            />
            </div>
            <div className="form-group">
            <label htmlFor="descripcion"></label>
            <textarea
                onChange={handleChange}
                placeholder="Message"
                className="form-control"
                id="descripcion"
                rows="3"
                value={userInput.descripcion}
            ></textarea>
            </div>
            <button id="buttonform" type="submit" className="btn btn-primary submitForm">Send</button>
            
        </form>
        {showAlert && <div id="alerta" className="alert alert-success">Mensaje enviado correctamente</div>}
        
        </div>
        </div>
        </section>
  );
}

export default Contact;
