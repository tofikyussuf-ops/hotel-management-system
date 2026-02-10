import { HiBars3 } from 'react-icons/hi2';
import { useSidebar } from '../context/SidebarContext.jsx';

import HeaderMenu from './HeaderMenu.jsx';
import UserAvatar from '../features/authentication/UserAvatar.jsx';

function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="flex items-center justify-between border-b border-[var(--color-grey-100)] bg-[var(--color-grey-0)] px-[2.4rem] py-[1.2rem] transition-all duration-300 lg:col-start-2 lg:px-[4.8rem]">
      {/* 1. Mobile Menu Toggle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        className="rounded-md p-2 outline-none hover:bg-[var(--color-grey-100)] lg:hidden"
      >
        <HiBars3 className="h-8 w-8 text-[var(--color-brand-600)]" />
      </button>

      <div className="ml-auto flex items-center gap-[1.2rem] md:gap-[2.4rem]">
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
