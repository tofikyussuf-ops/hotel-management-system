function ButtonText({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className="rounded-sm border-none bg-none text-center font-medium text-brand-600 transition-all duration-300 hover:text-brand-700 active:text-brand-700"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonText;
