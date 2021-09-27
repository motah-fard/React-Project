import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import React from "react";
export default function Nav() {
  return (
    <nav>
      <h3>GETFIT WITH ME!</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">Add a new comment</Link>
        <Link to="/NutritionsAndCalories">search</Link>
        <Link to="/aboutme">About Me</Link>
        <Link to="/contact/contactme!">Contact Me</Link>
      </div>
    </nav>
  );
}
