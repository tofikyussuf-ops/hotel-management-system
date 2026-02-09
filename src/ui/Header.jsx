import { HiBars3 } from 'react-icons/hi2';
import { useSidebar } from '../context/SidebarContext.jsx';
import { useUser } from '../features/authentication/useLogin.js';

function Header() {
  const { toggle } = useSidebar();
  const { user } = useUser(); // Get the real logged-in user

  // Extract user metadata (Supabase stores this in user_metadata)
  const { fullName, avatar } = user?.user_metadata || {};

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

      {/* 2. Right Side: User Info & Actions */}
      <div className="ml-auto flex items-center gap-[1.2rem] md:gap-[2.4rem]">
        {/* User Profile Info */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 overflow-hidden rounded-full border border-grey-200 bg-grey-100 shadow-sm">
            <img
              src={avatar || 'https://i.pravatar.cc/100'} // Fallback if no avatar
              alt={`Avatar of ${fullName}`}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="hidden text-[1.4rem] font-medium text-grey-600 sm:block">
            {fullName || 'User'}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
