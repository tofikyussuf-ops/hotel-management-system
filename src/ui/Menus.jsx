import { createContext, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;
  useEffect(
    function () {
      function handleScroll() {
        if (openId) {
          close();
        }
      }
      window.addEventListener('scroll', handleScroll, true);

      return () => window.removeEventListener('scroll', handleScroll, true);
    },
    [openId]
  );

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id, icon }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    // Get button coordinates
    const rect = e.target.closest('button').getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.left,
      y: rect.top + rect.height + 8,
    });

    openId === '' || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleClick}
      className="translate-x-[0.8rem] rounded-md border-none bg-none p-3 transition-all duration-200 hover:bg-grey-100 focus:outline-none"
    >
      {/* Increased icon size to 2.8rem or 3.2rem */}
      {icon ? icon : <HiEllipsisVertical className="h-8 w-8 text-grey-700" />}
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  // Reuse our hook to close when clicking outside!
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      className="fixed z-[1000] rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] px-4 py-3 shadow-md"
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full items-center gap-4 border-none bg-none px-4 py-2 text-left text-[1.4rem] font-medium text-grey-600 transition-all duration-200 hover:bg-grey-50 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-grey-400"
      >
        {icon} <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = ({ children }) => (
  <div className="flex items-center justify-end">{children}</div>
);
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
