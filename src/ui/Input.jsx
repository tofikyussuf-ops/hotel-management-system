import React from 'react';

const Input = React.forwardRef(function Input(
  { type = 'text', id, autoComplete, placeholder, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      id={id}
      autoComplete={autoComplete}
      placeholder={placeholder}
      {...props}
      className="block w-full rounded-md border border-[var(--color-grey-300)] bg-[var(--color-grey-0)] px-4 py-3 text-[var(--color-grey-900)] shadow-sm transition-all placeholder:text-[var(--color-grey-400)] focus:border-[var(--color-brand-600)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-600)] disabled:bg-[var(--color-grey-200)] disabled:text-[var(--color-grey-500)] sm:text-base"
    />
  );
});

export default Input;
