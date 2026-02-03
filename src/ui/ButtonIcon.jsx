function ButtonIcon({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className="rounded-sm border-none bg-none p-[0.6rem] transition-all duration-200 hover:bg-grey-100 [&_svg]:h-[2.2rem] [&_svg]:w-[2.2rem] [&_svg]:text-brand-600"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
