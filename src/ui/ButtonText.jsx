function ButtonText({
  children,
  onClick,
  color = 'brand', // default color
  hasOutline = false,
  ...props
}) {
  // 1. Define color mapping
  const colors = {
    brand:
      'text-brand-600 hover:text-brand-700 active:text-brand-700 border-brand-600',
    red: 'text-red-600 hover:text-red-700 active:text-red-700 border-red-600',
    grey: 'text-grey-600 hover:text-grey-700 active:text-grey-700 border-grey-600',
  };

  // 2. Base classes
  const base =
    'rounded-sm transition-all duration-300 font-medium text-center focus:outline-none';

  // 3. Conditional outline logic
  const outlineStyles = hasOutline
    ? 'border px-4 py-1 bg-transparent'
    : 'border-none bg-none';

  return (
    <button
      onClick={onClick}
      className={`${base} ${colors[color]} ${outlineStyles}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonText;
