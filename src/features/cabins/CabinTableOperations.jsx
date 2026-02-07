import FilterSelect from '../../ui/FilterSelect';
import SortBy from '../../ui/SortBy'; // This uses your Select component too

function CabinTableOperations() {
  return (
    <div className="flex items-center gap-6">
      {/* Filtering with Select */}
      <FilterSelect
        filterField="discount"
        options={[
          { value: 'all', label: 'All Cabins' },
          { value: 'no-discount', label: 'No Discount' },
          { value: 'with-discount', label: 'Special Offers' },
        ]}
      />

      {/* Sorting with Select */}
      <SortBy
        options={[
          { value: 'name-asc', label: 'Name (A-Z)' },
          { value: 'regularPrice-asc', label: 'Price (Low first)' },
          { value: 'regularPrice-desc', label: 'Price (High first)' },
          { value: 'maxCapacity-desc', label: 'Largest Capacity' },
        ]}
      />
    </div>
  );
}

export default CabinTableOperations;

/* 
import Filter from '../../ui/Filter';
function CabinTableOperations() {
  return (
    <div className="flex items-center gap-4">
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />
    </div>
  );
}

export default CabinTableOperations;
 */

/* 
import { HiBars3BottomLeft, HiFunnel } from 'react-icons/hi2';
import FilterDropdown from '../../ui/FilterDropdown';
function CabinTableOperations() {
  return (
    <div className="flex items-center gap-4">
      <FilterDropdown
        filterField="discount"
        icon={<HiFunnel />}
        options={[
          { value: 'all', label: 'Show All Cabins' },
          { value: 'no-discount', label: 'No Discount Only' },
          { value: 'with-discount', label: 'With Discount Only' },
        ]}
      />

      <FilterDropdown
        filterField="sortBy"
        icon={<HiBars3BottomLeft />}
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
        ]}
      />
    </div>
  );
}

export default CabinTableOperations;
 */
