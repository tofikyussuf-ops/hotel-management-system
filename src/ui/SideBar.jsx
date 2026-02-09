import { useSidebar } from '../context/SidebarContext.jsx';
import { useOutsideClick } from '../hooks/useOutsideClick';
import Logo from './Logo';
import MainNav from './MainNav';
import Uploader from '../data/Uploader.jsx';
import Logout from '../features/authentication/Logout.jsx';
function Sidebar() {
  const { isOpen, close } = useSidebar();
  const ref = useOutsideClick(close, false);

  return (
    <aside
      ref={ref}
      className={`/* POSITIONING & TRANSITIONS */ /* LAYOUT (Always Flex) */ /* STYLING */ /* RESPONSIVE VISIBILITY */ fixed left-0 top-0 z-[1001] flex h-screen w-[26rem] flex-col gap-12 border-r border-grey-100 bg-white px-6 py-8 transition-all duration-300 lg:static lg:row-span-full lg:translate-x-0 ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'} lg:shadow-none`}
    >
      <Logo />
      <MainNav />
      <Uploader />
      <div className="mt-auto border-t border-grey-100 pt-8">
        <Logout />
      </div>
    </aside>
  );
}

export default Sidebar;
