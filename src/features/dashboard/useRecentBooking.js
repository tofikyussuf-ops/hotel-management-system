import { useSearchParams } from 'react-router-dom';
import { subDays } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getBookingsAfterDate } from '../services/apiBookings';

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  // 1. Get the number of days from URL or default to 7
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  // 2. Calculate the date from X days ago (ISO string for Supabase)
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isPending, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ['bookings', `last-${numDays}`],
  });

  return { isPending, bookings };
}
