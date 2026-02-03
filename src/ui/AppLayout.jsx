import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './SideBar';

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="overflow-scroll bg-grey-50 p-10">
        <div className="mx-auto flex max-w-[120rem] flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
