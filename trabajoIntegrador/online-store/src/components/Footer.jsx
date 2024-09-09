import React from 'react';

function Footer() {
return (
    <footer className="footer py-3">
    <div className="container text-center">
        <span>
        <p>© {new Date().getFullYear()} PapeleraCesar. Todos los derechos reservados.</p>
        </span>
    </div>
    </footer>
);
}

export default Footer;