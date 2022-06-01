import "./Splash.css";
import { useSelector } from "react-redux";


function Splash() {
  const sessionUser = useSelector((state) => state.sessionUser);

  return (
    <div id="splash-body">
      <div>
        <div id="mid-header-container">
          {/* <img
            id="mid-header-photo"
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2020/10/06075646/balmain-header-Cropped.jpg"
          /> */}
          <video className="mid-header-video" autoPlay playsInline muted loop>
            <source
              type="video/mp4"
              src="https://res.cloudinary.com/www-eliesaab-com/video/upload/c_scale,h_1200,q_auto:good/v1644226949/HC_SS22_Banner_video_1_z56lug.mp4"
            />
          </video>
          <div id="video-text-container">
            <h2 id="video-text-title">Find your inspiration.</h2>
            {sessionUser ? <a href="/signup">
              <button id="video-signup-button">Start for Free</button>
            </a> : <a href="/photos">
              <button id="video-signup-button">Browse Looks</button>
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
