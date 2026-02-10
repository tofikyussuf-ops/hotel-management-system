import { useSearchParams } from 'react-router-dom';
import Menus from '../../ui/Menus'; // 1. Import the Menus component
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabin';

function CabinTable() {
  const { isPending, error, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (isPending) return <Spinner />;
  // 1. IMPROVED GUARD: Check for error first
  if (error)
    return (
      <p className="p-8 text-center font-semibold text-red-700">
        Error loading cabins. Please ensure you are logged in.
      </p>
    );

  // 2. IMPROVED GUARD: Check if cabins exists AND has length
  if (!cabins?.length)
    return (
      <p className="rounded-md bg-grey-50 p-8 text-center">
        No cabins found in the database.
      </p>
    );
  // 1) FILTER (Current logic)
  const filterValue = searchParams.get('discount') || 'all';
  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((c) => c.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((c) => c.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  // Create a copy of the array before sorting (sort() mutates the original)
  const sortedCabins = filteredCabins.sort((a, b) => {
    // Handling strings (like names) vs numbers (like price)
    if (typeof a[field] === 'string') {
      return a[field].localeCompare(b[field]) * modifier;
    }
    return (a[field] - b[field]) * modifier;
  });

  return (
    // 2. Wrap the entire table structure in the Menus provider
    <Menus>
      <div className="overflow-hidden rounded-[7px] border border-grey-200 bg-grey-0 text-[1.4rem]">
        <header className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-[2.4rem] border-b border-grey-100 bg-grey-50 px-[2.4rem] py-[1.6rem] font-semibold uppercase tracking-[0.4px] text-grey-600">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </header>

        {sortedCabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </Menus>
  );
}

export default CabinTable;
