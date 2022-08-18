import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPhotoForm from './EditPhotoForm';

function EditPhotoFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="photo-detail-btn" onClick={() => setShowModal(true)}><i class="fa-solid fa-pen-to-square"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPhotoForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditPhotoFormModal;
