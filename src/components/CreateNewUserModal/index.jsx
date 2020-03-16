import React from 'react';
import Modal from 'react-modal';
import Tada from 'react-reveal/Tada';

import './CreateNewUserModal.scss';

Modal.setAppElement('#root');

const CreateNewUserModal = ({ modalIsOpen, setModalIsOpen, modalTitle }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="Modal">
      <div className="Modal__body">
        <button onClick={() => setModalIsOpen(false)} className="Modal__button">
          &times;
        </button>
        <Tada>
          <h2 className="Modal__title">{modalTitle}</h2>
        </Tada>
      </div>
    </Modal>
  )
}

export default CreateNewUserModal;
