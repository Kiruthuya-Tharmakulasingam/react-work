import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div style = {style.container}>
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/contact">Contact</Link><br />
      </nav>
      </div>
    </header>
  );
}

const style = {
    container : {
        backgroundColor : "#ccc",
        textAlign : "center"
    }
}

export default Header;
