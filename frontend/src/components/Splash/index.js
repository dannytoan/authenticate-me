import "./Splash.css";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginFormModal from "../LoginFormModal";
import LogOut from "../Navigation/LogOut";
import * as sessionActions from "../../store/session";
import SignupFormModal from "../SignupFormPage";

function Splash() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user)

  const handleDemoSubmit = (e) => {
    const credential = "demo@user.io";
    const password = "password";
    return dispatch(sessionActions.login({ credential, password })).then(() =>
      history.push("/photos")
    );
  };

  return (
    <div>
      <div id="gray-overlay-navbar">
        <a href="/">
          <img
            id="nav-logo-splash"
            src="https://res.cloudinary.com/matchaprince/image/upload/v1660523189/designer-tsnp-crop_dytxmu.png"
          />
        </a>
        {sessionUser ? <LogOut user={sessionUser} /> :
        <div id="splash-auth-btns-ctnr">
          <LoginFormModal />
          {/* <NavLink to="/signup">
            <button id="nav-signup-btn">Sign Up</button>
          </NavLink> */}
          <SignupFormModal />
        </div>
        }
      </div>
      <div id="video-text-container">
        <h2 id="video-text-title">Find your inspiration.</h2>
        <h3 id="video-text-subtitle">
          Join the ĐESIGNR community, archive and  share <br/>the best and
          latest fashion.
        </h3>
        {sessionUser ? <Link to="/photos"><button id="demo-user-btn">Browse Looks</button></Link> : <button id="demo-user-btn" onClick={handleDemoSubmit}>
          Start as Demo
        </button>}
      </div>
      <div id="splash-footer">
        <a target="_blank" className="splash-footer-links" href="https://dannytoan.github.io/">About</a>
        <a target="_blank" className="splash-footer-links" href="https://github.com/dannytoan/designr-react-solo-project">Project Repository</a>
        <a target="_blank" className="splash-footer-links" href="https://github.com/dannytoan"><i class="fa-brands fa-github splash-footer-icons"></i></a>
        <a target="_blank" className="splash-footer-links" href="https://www.linkedin.com/in/dannytoan/"><i class="fa-brands fa-linkedin splash-footer-icons"></i></a>
        <a target="_blank" className="splash-footer-links" href="https://angel.co/u/danny-t-2"><i class="fa-brands fa-angellist splash-footer-icons"></i></a>
      </div>
      <video autoPlay playsInline muted loop id="myVideo">
        <source
          src="https://res.cloudinary.com/www-eliesaab-com/video/upload/c_scale,h_1200,q_auto:good/v1644226949/HC_SS22_Banner_video_1_z56lug.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default Splash;
