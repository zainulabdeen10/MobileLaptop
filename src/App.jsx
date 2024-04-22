import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import SearchItem from "./components/Searchitem";
import { items } from "./components/Data";

const App = () => {
  const [data, setdata] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setdata} />
        <Routes>
          <Route
            path="/"
            element={<Product items={data} cart={cart} setCart={setCart} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/search/:term" element={<SearchItem />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
