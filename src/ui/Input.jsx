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
      className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 sm:text-base"
    />
  );
});

export default Input;
