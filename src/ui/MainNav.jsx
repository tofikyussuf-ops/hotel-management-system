// src/ui/MainNav.jsx
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from 'react-icons/hi2';

function MainNav() {
  // Base classes for the link container
  const navLinkClasses = ({ isActive }) =>
    `group flex items-center gap-3 px-6 py-3 transition-all font-medium ${
      isActive
        ? 'text-grey-800 bg-grey-50 rounded-sm'
        : 'text-grey-600 hover:text-grey-800 hover:bg-grey-50 hover:rounded-sm'
    }`;

  // Helper to handle icon styling based on active/hover states
  const iconClasses = (isActive) =>
    `h-7 w-7 transition-all ${
      isActive ? 'text-brand-600' : 'text-grey-400 group-hover:text-brand-600'
    }`;

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="/dashboard" className={navLinkClasses}>
            {({ isActive }) => (
              <>
                <HiOutlineHome className={iconClasses(isActive)} />
                <span>Home</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/bookings" className={navLinkClasses}>
            {({ isActive }) => (
              <>
                <HiOutlineCalendarDays className={iconClasses(isActive)} />
                <span>Bookings</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/cabins" className={navLinkClasses}>
            {({ isActive }) => (
              <>
                <HiOutlineHomeModern className={iconClasses(isActive)} />
                <span>Cabins</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/users" className={navLinkClasses}>
            {({ isActive }) => (
              <>
                <HiOutlineUsers className={iconClasses(isActive)} />
                <span>Users</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className={navLinkClasses}>
            {({ isActive }) => (
              <>
                <HiOutlineCog6Tooth className={iconClasses(isActive)} />
                <span>Settings</span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
