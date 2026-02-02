import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  // ডেমো প্রোডাক্ট লিস্ট
  const products = [
    { id: 1, name: "Premium Rice (Miniket)", price: "৳3,200", category: "Grocery" },
    { id: 2, name: "Aloe Vera Face Wash", price: "৳450", category: "Skin Care" },
    { id: 3, name: "Baby Lotion (Mild)", price: "৳650", category: "Baby Care" },
    { id: 4, name: "Matte Lipstick (Red)", price: "৳350", category: "Cosmetics" },
    { id: 5, name: "Organic Honey (500g)", price: "৳800", category: "Grocery" },
    { id: 6, name: "Sunscreen SPF 50", price: "৳950", category: "Skin Care" }
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">Alternative Dokan</div>
        <div style={{ fontWeight: 'bold' }}>🛒 Cart ({cartCount})</div>
      </nav>

      {/* Hero Banner */}
      <header className="hero">
        <h1>Best Quality, Best Price</h1>
        <p>Grocery, Skin Care & Baby Products at your doorstep.</p>
        <button className="btn-primary">Shop Now</button>
      </header>

      {/* Product Section */}
      <div className="container">
        <h2 className="section-title">Latest Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* ইমেজের জায়গায় আপাতত ধূসর বক্স দিয়েছি */}
              <div className="product-img"></div> 
              <h3>{product.name}</h3>
              <p style={{ color: '#888', fontSize: '14px' }}>{product.category}</p>
              <div className="price">{product.price}</div>
              <button 
                className="btn-cart"
                onClick={() => setCartCount(cartCount + 1)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <p>&copy; 2026 Alternative Dokan. All rights reserved.</p>
        <p>Contact: 01610086635</p>
      </footer>
    </div>
  );
}

export default App;