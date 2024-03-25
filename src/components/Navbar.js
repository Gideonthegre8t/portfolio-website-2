import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
  };


  
  return (
    <div className="navigator">
      <nav className="navbar links" id={showLinks ? "hidden" : ""}>
        <a href="/#" onClick={handleClick}>
          Home
        </a>
        <a href="/#" onClick={handleClick}>
          Products
        </a>
        <a href="/#" onClick={handleClick}>
          Investment Club
        </a>
        <a href="/#" onClick={handleClick}>
          Blog
        </a>
        <a href="/#" onClick={handleClick}>
          About Us
        </a>
        <a href="/#" onClick={handleClick}>
         FAQs
        </a>
      </nav>
      <button onClick={() => setShowLinks(!showLinks)} className="nav-btn">
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
