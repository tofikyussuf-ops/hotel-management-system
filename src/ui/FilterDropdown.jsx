import { HiFunnel } from 'react-icons/hi2'; // A funnel icon looks better for filters
import { useSearchParams } from 'react-router-dom';
import Menus from './Menus';

function FilterDropdown({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <Menus>
      <Menus.Menu>
        <Menus.Toggle id={filterField} icon={<HiFunnel />} />

        <Menus.List id={filterField}>
          {options.map((option) => (
            <Menus.Button
              key={option.value}
              onClick={() => handleClick(option.value)}
              disabled={option.value === currentFilter}
            >
              {option.label}
            </Menus.Button>
          ))}
        </Menus.List>
      </Menus.Menu>
    </Menus>
  );
}
export default FilterDropdown;
