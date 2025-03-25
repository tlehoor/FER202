import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Menu.css";

const Menu = () => {
  return (
    <Nav className="me-auto menu">
      <NavLink as={Link} to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        Home
      </NavLink>
      <NavLink as={Link} to="/pokemon" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        Pokémon
      </NavLink>
      <NavLink as={Link} to="/character" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        Characters
      </NavLink>
      <NavLink as={Link} to="/gameplay" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        Gameplay
      </NavLink>
      <NavLink as={Link} to="/shop" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        Shop
      </NavLink>
    </Nav>
  );
};

export default Menu;