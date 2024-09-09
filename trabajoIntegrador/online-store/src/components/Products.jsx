import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialProducts = [
    { id: 1, name: 'Bolsas Consorcio x50', price: 15000 },
    { id: 2, name: 'Bolsas Arranque 750gr', price: 4500 },
    { id: 3, name: 'Bolsas Camiseta x100', price: 5700 },
    { id: 4, name: 'Bolsas Ecommerce x100', price: 11900 },
    { id: 5, name: 'Bolsas Riñon x50', price: 2300 },
    { id: 6, name: 'Bolsas Polipropileno', price: 3500 },
    { id: 7, name: 'Bandejas Plasticas', price: 5900 },
    { id: 8, name: 'Vasos Térmicos x25', price: 3900 },
    { id: 9, name: 'Vasos Plásticos x100', price: 4500 },
    { id: 10, name: 'Cinta de Embalar xCaja', price: 45000 },
    { id: 11, name: 'Rollo Plotter Sulfito', price: 15500 },
    { id: 12, name: 'Rollo Tizar xKg', price: 2700 },
];

function Products({ addToCart }) {
    const [products] = useState(initialProducts);
    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} ha sido añadido al carrito.`);
    };
    return (
        <div>
            <h2>Productos</h2>
            <p>Encuentra los mejores productos al mejor precio.</p>
            <div className="row pt-4">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <button className="btn btn-secondary" onClick={() => handleAddToCart(product)}>Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/Cart">
                <button className="btn btn-primary mt-4 mb-3">Ir al Carrito</button>
            </Link>
        </div>
    );
}

export default Products;