import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadPhotoForm from './UploadPhotoForm';

function UploadPhotoFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="upload-photo-nav-btn"><i class="fa-solid fa-cloud-arrow-up navbar-icons"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadPhotoForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default UploadPhotoFormModal;
