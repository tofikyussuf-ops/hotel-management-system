// 1. The Container
function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

// 2. The Toggle Button
function Toggle({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="translate-x-[0.8rem] rounded-sm border-none bg-none p-[0.4rem] transition-all duration-200 hover:bg-grey-100 [&_svg]:h-[2.4rem] [&_svg]:w-[2.4rem] [&_svg]:text-grey-700"
    >
      {/* Icon goes here */}
    </button>
  );
}

// 3. The Floating List
function List({ position, children }) {
  if (!position) return null;

  return (
    <ul
      className="fixed rounded-md bg-grey-0 shadow-md"
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
    >
      {children}
    </ul>
  );
}

// 4. The Action Button
function Button({ children, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex w-full items-center gap-[1.6rem] border-none bg-none px-[2.4rem] py-[1.2rem] text-left text-[1.4rem] transition-all duration-200 hover:bg-grey-50 [&_svg]:h-[1.6rem] [&_svg]:w-[1.6rem] [&_svg]:text-grey-400 [&_svg]:transition-all [&_svg]:duration-300"
      >
        {children}
      </button>
    </li>
  );
}
