import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCollectionForm from "./AddCollectionForm"

function AddCollectionFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="add-collection-click-btn" onClick={() => setShowModal(true)}>Add Collection</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCollectionForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddCollectionFormModal;
