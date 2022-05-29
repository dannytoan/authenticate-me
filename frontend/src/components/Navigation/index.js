import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.sessionUser);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div>
        <a className="auth-btn" href="/photos">
          Looks
        </a>
        <button className="auth-btn">Add a Look</button>
        <LoginFormModal />
        <NavLink to="/signup" className="auth-btn signup-btn btn">
          <button>Sign Up</button>
        </NavLink>
        <ProfileButton user={sessionUser} />
      </div>
    );
  }

  return (
    <div>
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
