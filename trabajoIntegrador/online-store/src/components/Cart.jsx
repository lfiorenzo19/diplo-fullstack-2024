import React from "react";

function Cart({
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
}) {
    
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Simula el proceso de pago
    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("El carrito está vacío, no hay productos para comprar.");
            return;
        }
        
        alert(`Compra completada con éxito. Total pagado: $${total.toFixed(2)}`);
        clearCart();
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul className="list-group mb-3">
                        {cart.map((product) => (
                            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {product.name} - ${product.price} x {product.quantity}
                                <div>
                                    <button className="btn btn-secondary btn-sm me-2" onClick={() => incrementQuantity(product.id)}>+</button>
                                    <button className="btn btn-secondary btn-sm me-2" onClick={() => decrementQuantity(product.id)}>-</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(product.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h4>Total a Pagar: ${total.toFixed(2)}</h4>
                    <div className="d-flex gap-3">
                        <button className="btn btn-danger mt-3" onClick={clearCart}>
                            Vaciar Carrito
                        </button>
                        <button className="btn btn-success mt-3" onClick={handleCheckout}>Pagar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
