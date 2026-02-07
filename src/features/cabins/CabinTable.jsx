import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Menus from '../../ui/Menus'; // 1. Import the Menus component

function CabinTable() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  if (isPending) return <Spinner />;
  if (!cabins) return <p>No cabins found. check your connection</p>;

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

        {/* Now every CabinRow can access the MenusContext */}
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </Menus>
  );
}

export default CabinTable;
