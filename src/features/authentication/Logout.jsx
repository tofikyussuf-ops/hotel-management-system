import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <button
      disabled={isPending}
      onClick={logout}
      // Matching navLinkClasses: group, flex, items-center, gap-3, px-6, py-3
      className="group flex w-full items-center gap-3 px-6 py-3 font-medium text-grey-600 transition-all hover:rounded-sm hover:bg-grey-50 hover:text-grey-800 disabled:cursor-not-allowed"
    >
      {!isPending ? (
        <>
          {/* Matching iconClasses: h-7, w-7, text-grey-400, group-hover:text-brand-600 */}
          <HiOutlineArrowRightOnRectangle className="h-7 w-7 text-grey-400 transition-all group-hover:text-brand-600" />
          <span>Logout</span>
        </>
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default Logout;

/* import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <button
      disabled={isPending}
      onClick={logout}
      // Matching navLinkClasses: group, flex, items-center, gap-3, px-6, py-3
      className="group flex w-full items-center gap-3 px-6 py-3 font-medium text-grey-600 transition-all hover:rounded-sm hover:bg-grey-50 hover:text-grey-800 disabled:cursor-not-allowed"
    >
      {!isPending ? (
        <>
         
          <HiOutlineArrowRightOnRectangle className="h-7 w-7 text-grey-400 transition-all group-hover:text-brand-600" />
          <span>Logout</span>
        </>
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default Logout; */
