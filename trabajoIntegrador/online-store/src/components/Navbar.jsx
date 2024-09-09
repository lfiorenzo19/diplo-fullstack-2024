import React from 'react';
import { Link } from 'react-router-dom';
import instagramIcon from '../assets/img/ig.png';
import twitterIcon from '../assets/img/x2.png';
import whatsappIcon from '../assets/img/wpp.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand" to="/">Papelera Cesar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-dark navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Carrito</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-social-icons d-flex gap-2">
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappIcon} alt="Whatsapp" className="social-icon" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/papelera.cesar/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" className="social-icon" />
                    </a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
