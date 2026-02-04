import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
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

  if (isPending) return <Spinner />;
  if (!cabins) return <p>No cabins found.</p>;
  return (
    <div className="overflow-hidden rounded-[7px] border border-grey-200 bg-grey-0 text-[1.4rem]">
      <header className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-[2.4rem] border-b border-grey-100 bg-grey-50 px-[2.4rem] py-[1.6rem] font-semibold uppercase tracking-[0.4px] text-grey-600">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </header>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinTable;

{
  /*
// 1. Add an outer wrapper with overflow-x-auto
<div className="overflow-x-auto">
  {/* 2. Give the table a min-width so it doesn't squash 
  <div className="min-w-[70rem] border border-grey-200 bg-grey-0 rounded-[7px]">
    
    <header className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-[2.4rem] border-b border-grey-100 bg-grey-50 px-[2.4rem] py-[1.6rem] font-semibold uppercase tracking-[0.4px] text-grey-600">
      <div></div>
      <div>Cabin</div>
      <div>Capacity</div>
      <div>Price</div>
      <div>Discount</div>
      <div></div>
    </header>

   
    <div className="flex flex-col">
       {/* CabinRows will render here 
    </div>
    
  </div>
</div>*/
}
