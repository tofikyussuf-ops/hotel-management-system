import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getBookings } from '../../services/apiBookings';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER (already done)
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  // SORTING
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    // Adding sortBy to queryKey is crucial for re-fetching!
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, error, bookings };
}
