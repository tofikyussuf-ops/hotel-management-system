import { HiBars3 } from 'react-icons/hi2';
import { useSidebar } from '../context/SidebarContext.jsx';

function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="flex items-center justify-between border-b border-grey-100 bg-white px-[2.4rem] py-[1.2rem] lg:col-start-2 lg:px-[4.8rem]">
      {/* 1. Hamburger: Only visible on small/medium screens */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // 🛑 This prevents the "outside click" hook from hearing this click
          toggle();
        }}
        className="rounded-md p-2 outline-none hover:bg-grey-100 focus:outline-none lg:hidden"
      >
        <HiBars3 className="h-8 w-8 text-brand-600" />
      </button>

      {/* 2. User Profile: Always on the right, regardless of screen size */}
      <div className="ml-auto flex items-center gap-4">
        <span className="text-sm font-medium text-grey-600">User Profile</span>
        <div className="h-10 w-10 overflow-hidden rounded-full border border-grey-200 bg-grey-100">
          <img
            src="https://i.pravatar.cc/100"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
