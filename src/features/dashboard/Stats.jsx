import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Number of Bookings
  const numBookings = bookings.length;

  // 2. Total Sales (Sum of total_price)
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. Total Check-ins
  const checkins = confirmedStays.length;

  // 4. Occupancy Rate
  // Formula: (num nights stayed) / (total available nights)
  // Total available nights = numDays * cabinCount
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <div className="col-span-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
      />
    </div>
  );
}

export default Stats;
