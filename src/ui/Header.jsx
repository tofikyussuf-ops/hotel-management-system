function Header() {
  return (
    <header className="flex items-center justify-end gap-[2.4rem] border-b border-grey-100 bg-white px-[4.8rem] py-[1.2rem]">
      <div className="flex items-center gap-4">
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
