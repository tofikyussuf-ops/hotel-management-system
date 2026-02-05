import React from 'react';

// 1. Wrap the function in React.forwardRef
const Input = React.forwardRef(function Input(
  { type = 'text', id, autoComplete, placeholder, ...props }, // 2. Use ...props to catch everything from register()
  ref // 3. The second argument is the forwarded ref
) {
  return (
    <input
      ref={ref} // 4. Attach the ref to the actual DOM element
      type={type}
      id={id}
      autoComplete={autoComplete}
      placeholder={placeholder}
      {...props} // 5. Spread props (includes onChange, onBlur, etc.)
      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
});

export default Input;
