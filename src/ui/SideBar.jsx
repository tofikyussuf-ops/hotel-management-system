// src/ui/Sidebar.jsx
import Logo from './Logo'; // If you have a Logo component
import MainNav from './MainNav';

function Sidebar() {
  return (
    <aside className="row-span-full flex flex-col gap-12 border-r border-grey-100 bg-white px-6 py-8">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
