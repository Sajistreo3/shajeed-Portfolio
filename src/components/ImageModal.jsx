import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ path }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <img src={path} alt="Screen shot" />
      </Modal>
    </div>
  );
};


export default ImageModal;