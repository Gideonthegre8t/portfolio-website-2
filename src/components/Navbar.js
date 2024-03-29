import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setShowLinks(false); // Close the navbar after clicking a link
  };

  return (
    <div className="navigator">
      <nav className="navbar links" id={showLinks ? "hidden" : ""}>
        <a href="/#" onClick={(e) => handleClick(e, "home")}>
          Home
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "invest")}>
          Investment Club
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "assets")}>
          Assets
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "save")}>
          Start Saving
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "testimonial")}>
          Testimonials
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "community")}>
          Community
        </a>
      </nav>
      <button onClick={() => setShowLinks(!showLinks)} className="nav-btn">
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
