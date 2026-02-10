import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();

  // Handle click outside logic
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      // 'true' ensures we listen in the capturing phase
      document.addEventListener('click', handleClick, true);
      return () => document.removeEventListener('click', handleClick, true);
    },
    [close]
  );

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] bg-[var(--backdrop-color)] backdrop-blur-sm transition-all duration-500">
      {/* 1. The inner modal box now uses grey-0 (white in light, dark navy in dark) */}
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[var(--color-grey-0)] p-12 shadow-lg transition-all duration-500"
      >
        <button
          onClick={close}
          className="absolute right-5 top-4 translate-x-3 rounded-sm p-2 transition-all hover:bg-[var(--color-grey-100)]"
        >
          <HiXMark className="h-8 w-8 text-[var(--color-grey-500)]" />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
