import React, { useState } from "react";
import "../components/Header.css";
import { NavLink } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo"><FaGraduationCap size={40}/>GEC College</div>

        {/* Mobile Toggle Button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <RxCross2  size={26}/> : <LuMenu  size={26}/>}
        </button>


        <nav className={`nav ${open ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/departments"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            Departments
          </NavLink>

          <NavLink
            to="/contact"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
