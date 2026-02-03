function Input({
  type = 'text',
  id,
  value,
  onChange,
  autoComplete,
  placeholder,
}) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
}

export default Input;
