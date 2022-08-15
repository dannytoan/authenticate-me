import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpFormPage from './SignupFormPage';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="nav-signup-btn" onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpFormPage setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
