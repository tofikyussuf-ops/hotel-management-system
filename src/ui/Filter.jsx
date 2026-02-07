import { useSearchParams } from 'react-router-dom';
function Filter({ filterField, options }) {
  // Logic for finding the current active filter usually goes here
  // (e.g., via useSearchParams)
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current filter from URL or default to the first option
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  } // Placeholder

  return (
    <div className="flex gap-[0.4rem] rounded-sm border border-grey-100 bg-grey-0 p-[0.4rem] shadow-sm">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

function FilterButton({ active, children, ...props }) {
  const activeStyles = active
    ? 'bg-brand-600 text-brand-50'
    : 'bg-grey-0 text-grey-700';

  return (
    <button
      className={` ${activeStyles} hover:not(:disabled):bg-brand-600 hover:not(:disabled):text-brand-50 rounded-sm border-none px-[0.8rem] py-[0.44rem] text-[1.4rem] font-medium transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Filter;
