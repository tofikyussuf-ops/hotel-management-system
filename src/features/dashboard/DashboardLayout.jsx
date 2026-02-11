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
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
      {/* 1. Statistics Row (Takes full width, handles its own internal grid) */}
      <div className="col-span-full">
        <Stats
          bookings={bookings}
          confirmedStays={confirmedStays}
          numDays={numDays}
          cabinCount={cabins.length}
        />
      </div>

      {/* 2. Today's Activity (Left side on big screens) */}
      <div className="col-span-full lg:col-span-2">
        <TodayActivity />
      </div>

      {/* 3. Duration Chart (Right side on big screens) */}
      <div className="col-span-full lg:col-span-2">
        <DurationChart stays={confirmedStays} />
      </div>

      {/* 4. Sales Chart (Bottom row, full width) */}
      <div className="col-span-full">
        <SalesChart bookings={bookings} numDays={numDays} />
      </div>
    </div>
  );
}

export default DashboardLayout;
