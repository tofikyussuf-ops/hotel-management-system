import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function FilterSelect({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-2">
      {/* Optional: Add a small label for a "Pro" look */}
      <span className="text-[1.2rem] font-semibold uppercase text-grey-500">
        Filter:
      </span>
      <Select
        options={options}
        value={currentFilter}
        type="white"
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterSelect;
