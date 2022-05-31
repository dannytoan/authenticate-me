import "./Splash.css";

function Splash() {
  return (
    <div id="splash-body">
      <div>
        <div id="mid-header-container">
          {/* <img
            id="mid-header-photo"
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2020/10/06075646/balmain-header-Cropped.jpg"
          /> */}
          <video className="mid-header-video" autoPlay playsinline muted loop>
            <source type="video/mp4" src="https://res.cloudinary.com/www-eliesaab-com/video/upload/c_scale,h_1200,q_auto:good/v1644226949/HC_SS22_Banner_video_1_z56lug.mp4"/>
          </video>
          <div id="video-text-container">
            <h2 id="video-text-title">Find your inspiration.</h2>
            <button id="video-signup-button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
