import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCollectionForm from "./EditCollectionForm"

function EditCollectionFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="edit-collection-click-btn" onClick={() => setShowModal(true)}>Edit Title</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCollectionForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditCollectionFormModal;
