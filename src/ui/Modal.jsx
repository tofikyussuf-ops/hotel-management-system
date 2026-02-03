import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {
  // Using React Portal to render the modal outside the DOM hierarchy
  return createPortal(
    <div className="fixed left-0 top-0 z-[1000] h-screen w-full bg-[var(--backdrop-color)] backdrop-blur-sm transition-all duration-500">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-grey-0 p-[3.2rem_4rem] shadow-lg transition-all duration-500">
        <button
          onClick={onClose}
          className="absolute right-[1.9rem] top-[1.2rem] translate-x-[0.8rem] rounded-sm border-none bg-none p-[0.4rem] transition-all duration-200 hover:bg-grey-100 [&_svg]:h-[2.4rem] [&_svg]:w-[2.4rem] [&_svg]:text-grey-500"
        >
          {/* Close Icon (HiXMark usually) */}
          <svg>...</svg>
        </button>

        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
