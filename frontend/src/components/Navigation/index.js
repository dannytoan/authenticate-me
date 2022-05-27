import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.sessionUser);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div >
        <NavLink to="/login" className="auth-btn">Log In</NavLink>
        <NavLink to="/signup" className="auth-btn signup-btn">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div >
      <ul className="nav-bg">
        <li id="auth-buttons">
          <NavLink id="home-btn" exact to="/">
            Home
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}
