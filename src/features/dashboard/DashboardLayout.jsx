import Spinner from '../../ui/Spinner';
import { useCabins } from '../cabins/useCabin'; // Assuming you have this hook
import DurationChart from './DurationChart';
import SalesChart from './SalesChart';
import Stats from './stats';
import TodayActivity from './TodayActivity';
import { useRecentBookings } from './useRecentBooking';
import { useRecentStays } from './useRecentStay';
function DashboardLayout() {
  const { bookings, isPending: isPending1 } = useRecentBookings();
  const { confirmedStays, numDays, isPending: isPending2 } = useRecentStays();
  const { cabins, isPending: isPending3 } = useCabins();

  // Combine all loading states
  if (isPending1 || isPending2 || isPending3) return <Spinner />;

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_34rem_auto] gap-10 md:grid-cols-2 lg:grid-cols-4">
      {/* 1. Statistics Row */}
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      {/* 2. Charts Row */}

      <div className="col-span-full rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 shadow-sm">
        <h3 className="mb-4 text-xl font-semibold text-[var(--color-grey-700)]">
          Today's Activity
        </h3>
        <TodayActivity />
      </div>
      {/* We pass stays to the duration chart which we already themed */}
      <div className="col-span-full rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 shadow-sm lg:col-span-2">
        <DurationChart stays={confirmedStays} />
      </div>

      <div className="col-span-full rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 shadow-sm lg:col-span-2">
        {/* We'll build the SalesChart area chart next! */}
        <SalesChart bookings={bookings} numDays={numDays} />
      </div>

      {/* 3. Final Row */}
    </div>
  );
}

export default DashboardLayout;
