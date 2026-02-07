import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1) Get the value from the URL (so the dropdown stays in sync if you refresh)
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    // 2) Set the new value in search params
    searchParams.set('sortBy', e.target.value);

    // 3) Update the URL
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white" // Using the 'white' style from your Select component
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
