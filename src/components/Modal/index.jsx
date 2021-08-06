import { useEffect } from 'react';

import Portal from './Portal';
import {
  ModalOverlay,
  ModalDialog
} from './style';

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(event) {
      if (event.keyCode === 27) onClose();
    }

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    }
  }, [onClose]);
  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(event) {
    event.stopPropagation();
  }

  return (
    <Portal>
      <ModalOverlay onClick={onOverlayClick}>
        <ModalDialog onClick={onDialogClick}>{children}</ModalDialog>
      </ModalOverlay>
    </Portal>
  );
};

export default Modal;