function Select({ options, value, onChange, type = 'default', ...props }) {
  const borderStyles = type === 'white' ? 'border-grey-100' : 'border-grey-300';

  return (
    <select
      value={value}
      onChange={onChange}
      className={` ${borderStyles} rounded-sm border bg-grey-0 px-[1.2rem] py-[0.8rem] text-[1.4rem] font-medium shadow-sm focus:outline-none`}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
