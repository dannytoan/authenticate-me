import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignUpFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);

      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }

    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div id="signup-body">
      <div id="signup-container">
        <h1 id="signup-title">Join the inspiration.</h1>
        <form onSubmit={handleSubmit} id="signup-form">
          <ul className="errors">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label className="signup-label">
            Email:
            <input
              type="text"
              value={email}
              className="signup-input-box"
              placeholder="Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </label>
          <label className="signup-label">
            Username:
            <input
              type="text"
              value={username}
              className="signup-input-box"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              />
          </label>
          <label className="signup-label">
            Password:
            <input
              type="password"
              value={password}
              className="signup-input-box"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </label>
          <label className="signup-label">
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              className="signup-input-box"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button id="signup-button-form" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpFormPage;
