import UploadPhotoFormModal from "../UploadPhotoModal";
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import "./Navigation.css";

export default function Navigation({ isLoaded }) {
    const dispatch = useDispatch()

  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div id="nav-cntr">
          <div id="nav-left-container">
      <a href="/photos">
        <img
          id="nav-logo"
          src="https://res.cloudinary.com/matchaprince/image/upload/v1660523189/designer-tsnp-crop_dytxmu.png"
        />
      </a>
        <a
          href="https://dannytoan.github.io/"
          target="_blank"
          className="nav-left-about-links"
        >
          About
        </a>
        <a
          href="https://github.com/dannytoan"
          target="_blank"
          className="nav-left-about-links"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/dannytoan/"
          target="_blank"
          className="nav-left-about-links"
        >
          LinkedIn
        </a>
        <a
          href="https://angel.co/u/danny-t-2"
          target="_blank"
          className="nav-left-about-links"
        >
          AngelList
        </a>
      </div>
      <div id="nav-icon-cntr">
        <UploadPhotoFormModal />
        <a href="/collections">
          <i class="fa-solid fa-bookmark navbar-icons"></i>
        </a>
        <i class="fa-solid fa-arrow-right-from-bracket navbar-icons" onClick={onLogout}></i>
      </div>
    </div>
  );
}
