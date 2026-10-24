
import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Wireless Headphones", price: 1499, category: "Electronics", emoji: "🎧" },
  { id: 2, name: "Smart Watch", price: 1999, category: "Electronics", emoji: "⌚" },
  { id: 3, name: "Casual Sneakers", price: 1299, category: "Fashion", emoji: "👟" },
  { id: 4, name: "Travel Backpack", price: 899, category: "Fashion", emoji: "🎒" },
  { id: 5, name: "Coffee Mug", price: 299, category: "Home", emoji: "☕" },
  { id: 6, name: "Desk Lamp", price: 699, category: "Home", emoji: "💡" }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category)
  );

  return (
    <div className="app">
      <header>
        <h2>🛍️ ShopSmart</h2>
        <span>Simple shopping, smarter choices</span>
        <strong>🛒 Cart: {cart.length}</strong>
      </header>

      <section className="hero">
        <p>WELCOME TO SHOPSMART</p>
        <h1>Find Your Everyday Essentials</h1>
        <p>Explore our collection at great prices.</p>
        <input
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
      </section>

      <main>
        <h2>Featured Products</h2>
        <div className="products">
          {filtered.map(p => (
            <article className="product" key={p.id}>
              <div className="emoji">{p.emoji}</div>
              <p>{p.category}</p>
              <h3>{p.name}</h3>
              <h3>₹{p.price}</h3>
              <button onClick={() => setCart([...cart, p])}>
                Add to Cart
              </button>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p>No products found.</p>}
        <h2>Your Cart ({cart.length} items)</h2>
        {cart.map((p, i) => (
          <p key={i}>{p.name} — ₹{p.price}</p>
        ))}
        <h3>Total: ₹{cart.reduce((sum, p) => sum + p.price, 0)}</h3>
      </main>

      <footer>© 2026 ShopSmart | Built with React</footer>
    </div>
  );
}

export default App;
