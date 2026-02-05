const sizes = {
  small:
    'text-[1.2rem] py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center',
  medium: 'text-[1.4rem] py-[1.2rem] px-[1.6rem] font-medium',
  large: 'text-[1.6rem] py-[1.2rem] px-[2.4rem] font-medium',
};

const variations = {
  primary: 'text-brand-50 bg-brand-600 hover:bg-brand-700',
  secondary: 'text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50',
  danger: 'text-red-100 bg-red-700 hover:bg-red-800',
};

function Button({
  size = 'medium',
  variation = 'primary',
  children,
  onclick,
  ...props
}) {
  // Base classes that apply to ALL buttons
  const baseStyles =
    'rounded-sm shadow-sm transition-colors duration-300 focus:outline-none';

  // Combine base, size, and variation classes
  const className = `${baseStyles} ${sizes[size]} ${variations[variation]}`;

  return (
    <button onClick={onclick} className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
