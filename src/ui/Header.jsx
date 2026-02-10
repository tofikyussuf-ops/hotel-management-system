import { HiBars3 } from 'react-icons/hi2';
import { useSidebar } from '../context/SidebarContext.jsx';

import HeaderMenu from './HeaderMenu.jsx';
import UserAvatar from '../features/authentication/UserAvatar.jsx';

function Header() {
  const { toggle } = useSidebar();
  // Get the real logged-in user

  // Extract user metadata (Supabase stores this in user_metadata)

  return (
    <header className="flex items-center justify-between border-b border-grey-100 bg-white px-[2.4rem] py-[1.2rem] lg:col-start-2 lg:px-[4.8rem]">
      {/* 1. Mobile Menu Toggle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        className="rounded-md p-2 outline-none hover:bg-grey-100 lg:hidden"
      >
        <HiBars3 className="h-8 w-8 text-brand-600" />
      </button>

      <div className="ml-auto flex items-center gap-[1.2rem] md:gap-[2.4rem]">
        {/* We just drop the component here. It handles its own fetching! */}
        <UserAvatar />
        <HeaderMenu />
        {/* Future: Add HeaderMenu (Account, Theme Toggle, etc.) here */}
      </div>
    </header>
  );
}

export default Header;
