import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div id="modal-container">
      <div id="login-text-container">
        <h1 id="login-text">Log in to your account</h1>
        <p id="login-text-desc">Enter your credentials to continue.</p>
      </div>
      <form onSubmit={handleSubmit} id="modal-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div id="login-container">
          <label className="input-label">Username or Email</label>
          <input
            className="auth-input"
            type="text"
            value={credential}
            placeholder="Your Username or Email"
            onChange={(e) => setCredential(e.target.value)}
            required
            />

          <label className="input-label">Password</label>
          <input
            className="auth-input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
