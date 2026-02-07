import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getCabins } from '../../services/apiCabins';
import Menus from '../../ui/Menus'; // 1. Import the Menus component
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';

function CabinTable() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });
  const [searchParams] = useSearchParams();
  if (isPending) return <Spinner />;
  if (!cabins) return <p>No cabins found. check your connection</p>;
  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

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

        {filteredCabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </Menus>
  );
}

export default CabinTable;
