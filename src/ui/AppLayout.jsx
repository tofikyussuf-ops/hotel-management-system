import { Outlet } from 'react-router-dom';
import { SidebarProvider, useSidebar } from '../context/SidebarContext.jsx';
import Header from './Header';
import Sidebar from './SideBar';

function AppLayoutContent() {
  const { isOpen, close } = useSidebar();
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] lg:grid-cols-[26rem_1fr]">
      <Header />
      <Sidebar />
      <main className="overflow-y-auto bg-grey-50 p-[4rem]">
        <div className="mx-auto flex max-w-[120rem] flex-col gap-[3.2rem]">
          <Outlet />
        </div>
      </main>

      {isOpen && (
        <div
          className="bg-grey-900/10 fixed inset-0 z-[1000] backdrop-blur-sm lg:hidden"
          onClick={close}
        />
      )}
    </div>
  );
}

function AppLayout() {
  return (
    <SidebarProvider>
      <AppLayoutContent />
    </SidebarProvider>
  );
}

export default AppLayout;
