import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

// 1. Create the context
const ModalContext = createContext();

// 2. Parent Component
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

// 3. Trigger Component
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  // We clone the button and inject the onClick handler
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

// 4. Window Component
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  // We use a Portal to render the modal at the root of the document
  return createPortal(
    <div className="fixed inset-0 z-[1000] bg-white/10 backdrop-blur-sm transition-all duration-500">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-12 shadow-lg transition-all duration-500">
        <button
          onClick={close}
          className="absolute right-5 top-4 translate-x-3 rounded-sm p-2 transition-all hover:bg-grey-100"
        >
          <HiXMark className="h-8 w-8 text-grey-500" />
        </button>

        <div>
          {/* We clone the child (the form) to pass the close function automatically */}
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

// 5. Assign children to the parent
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
