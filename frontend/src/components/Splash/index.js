import "./Splash.css";
import { useSelector } from "react-redux";


function Splash() {
  const sessionUser = useSelector((state) => state.session.user);
  // let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (<a href="/signup">
//     <button id="video-signup-button">Start for Free</button>
//   </a>)
//   } else {
//     sessionLinks = (
// <a href="/photos">
//               <button id="video-signup-button">Browse Looks</button>
//             </a>
//     )
//   }

  return (
    <div id="splash-body">
      <div>
        <div id="mid-header-container">
          {/* <img
            id="mid-header-photo"
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2020/10/06075646/balmain-header-Cropped.jpg"
          /> */}
          {(!sessionUser) ? <video className="mid-header-video" autoPlay playsInline muted loop>
            <source
              type="video/mp4"
              src="https://res.cloudinary.com/www-eliesaab-com/video/upload/c_scale,h_1200,q_auto:good/v1644226949/HC_SS22_Banner_video_1_z56lug.mp4"
            />
          </video> : <video className="mid-header-video" autoPlay playsInline muted loop>
            <source
            type="video/mp4"
            src="https://res.cloudinary.com/matchaprince/video/upload/v1654204077/final_6298f521360d2e00d54e7b11_531959_m00i0z.mp4"
            />
            </video>}
          <div id="video-text-container">
            <h2 id="video-text-title">{(!sessionUser) ? "Find your inspiration." : "Begin the Inspiration."}</h2>
            {(!sessionUser) ? <a href="/signup">
              <button id="video-signup-button">Start for Free</button>
            </a> : <a href="/photos">
              <button id="video-signup-button">Browse Looks</button>
            </a>}
            {/* {sessionLinks} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
