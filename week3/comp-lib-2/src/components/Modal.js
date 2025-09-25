import Button from './Button';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const { children, onClose } = props;
  return ReactDOM.createPortal(
    <>
      <div
        className='absolute inset-0 bg-gray-300 opacity-50'
        onClick={onClose}
      ></div>
      <div className='absolute inset-20 rounded-2xl bg-white'>
        <Button danger onClick={onClose} className='m-4 rounded-2xl'>
          X
        </Button>
        {children}
      </div>
    </>,
    document.getElementById('modalContainer')
  );
};

export default Modal;
