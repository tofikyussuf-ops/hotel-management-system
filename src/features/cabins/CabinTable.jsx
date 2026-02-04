import CabinRow from './CabinRow';
import Spinner from '../../ui/Spinner';
import getCabins from '../../services/apiCabins';
import { useQuery } from '@tanstack/react-query';

function CabinTable() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabin'],
    queryFn: getCabins,
  });
  console.log(isPending, cabins, error);

  if (isPending) return <Spinner />;
  return (
    <div className="overflow-hidden rounded-[7px] border border-grey-200 bg-grey-0 text-[1.4rem]">
      {/* Replacement for TableHeader */}
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
