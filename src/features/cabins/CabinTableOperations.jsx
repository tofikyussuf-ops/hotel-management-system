import FilterDropdown from '../../ui/FilterDropdown';
import Menus from '../../ui/Menus';
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

function CabinTableOperations() {
  return (
    <div className="flex items-center gap-4">
      {/* Using the Menu-based filter */}
      <FilterDropdown
        filterField="discount"
        options={[
          { value: 'all', label: 'Show All Cabins' },
          { value: 'no-discount', label: 'No Discount Only' },
          { value: 'with-discount', label: 'With Discount Only' },
        ]}
      />

      {/* You could add a second one for Sorting! */}
      <FilterDropdown
        filterField="sortBy"
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
