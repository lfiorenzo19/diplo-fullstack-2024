import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Secciones/Home';
import Products from './components/Secciones/Products';
import Cart from './components/Secciones/Cart';
import Contact from './components/Secciones/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const incrementQuantity = (productId) => {
    setCart(
      cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrementQuantity = (productId) => {
    setCart(
      cart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-3 flex-grow-1">
        <Routes basename="/diplo-fullstack-2024">
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeFromCart={removeFromCart} clearCart={clearCart}/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;