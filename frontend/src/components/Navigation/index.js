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
        <LoginFormModal />
        <NavLink to="/signup" className="auth-btn signup-btn btn">
          <button class="auth-btn">Sign Up</button>
        </NavLink>
        {/* <ProfileButton user={sessionUser} /> */}
      </div>
    );
  }

  return (
    <div>
      <div id="masthead">
        <div id="logo">DESIGNR.</div>
      </div>
      <div id="masthead-buttons">{isLoaded && sessionLinks}</div>
      <ul className="nav-bg">
        <li id="auth-buttons">
          <NavLink id="home-btn" exact to="/">
            <button className="auth-btn">Home</button>
          </NavLink>
          <a href="/photos">
            <button className="auth-btn">Looks</button>
          </a>
          <a href="/photos/new">
            <button className="auth-btn">Add a Look</button>
          </a>
        </li>
      </ul>
    </div>
  );
}
