import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header style={hstyle}>
        <h1 style={{ "font-size": "40px" }}>Challenge</h1>
        <Link to="/" style={lstyle}>
          Pic Some
        </Link>
        <Link to="/cart" style={lstyle}>
          <i>CART</i>
        </Link>
      </header>
    </div>
  );
}

export default Navbar;

const hstyle = {
  background: "#333",
  color: "#fff",
  textAlign: "Center",
  padding: "15px",
  height: "120px",
};

const lstyle = {
  color: "#fff",
  padding: "10px",
  textAlign: "right",
  fontSize: "14px",
};
