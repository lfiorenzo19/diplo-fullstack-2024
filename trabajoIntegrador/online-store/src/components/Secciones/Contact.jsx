import React, { useState } from 'react';
import Map from '../Map/Map'; 

function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado con éxito.');
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <div><h2 className="text-center mb-4">Contáctanos</h2></div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Tu correo electrónico" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Escribe tu mensaje"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
            {submitted && (
                <div className="alert alert-success mt-3" role="alert">
                    <p>¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.</p>
                </div>
            )}
            <Map />
        </div>
    );
}

export default Contact;