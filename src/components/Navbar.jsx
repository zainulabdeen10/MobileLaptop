import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";

const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            LapTop ShapTop
          </Link>
          <form
            // onClick={handleSubmit}
            onSubmit={handleSubmit}
            className="search-bar"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        <div className="nav-bar-wrapper">
          <div className="items">Filter by{"->"}</div>
          <div className="items" onClick={() => setData(items)}>
            No Filter
          </div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptops
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablets
          </div>
          <div onClick={() => filterByPrice(29000)} className="items">
            {">="}29000
          </div>
          <div onClick={() => filterByPrice(49000)} className="items">
            {">="}49000
          </div>
          <div onClick={() => filterByPrice(69000)} className="items">
            {">="}69000
          </div>
          <div onClick={() => filterByPrice(89000)} className="items">
            {">="}89000
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
