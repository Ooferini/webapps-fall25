import Button from '../components/Button';
import Modal from '../components/Modal';
import { useState } from 'react';

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button primary onClick={handleClick}>
        open modal
      </Button>
      {isModalOpen && <Modal onClose={handleClose} />}
    </div>
  );
};

export default ModalPage;
