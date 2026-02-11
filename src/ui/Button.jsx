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
  as, // 👈 Extract the 'as' prop
  ...props
}) {
  // 1. Determine which tag to use (default to button)
  const Tag = as || 'button';

  const baseStyles =
    'rounded-sm shadow-sm transition-colors duration-300 focus:outline-none inline-block';

  const className = `${baseStyles} ${sizes[size]} ${variations[variation]}`;

  return (
    /* 2. Render the Dynamic Tag and spread props so 'to' reaches Link */
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}

export default Button;
