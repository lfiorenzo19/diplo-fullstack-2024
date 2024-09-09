import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/4.png'

function Home() {
    return (
        <div className="home-container">
            <img className="logo" src={logo} alt="logo" />
            <h1>Bienvenido a Papelera Cesar</h1>
            <p>Explora nuestra amplia gama de artículos y ofertas especiales.</p>
            <p>Compra con confianza y disfruta de una experiencia de compra segura y sencilla.</p>
            <div className="button-container">
                <Link to="/products">
                    <button className="btn btn-primary mt-4">Ver Catálogo de Productos</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
