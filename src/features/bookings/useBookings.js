import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getBookings } from '../../services/apiBookings';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // 1. FILTER
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    // We add 'filter' to the queryKey so that when the filter changes,
    // React Query automatically re-fetches the data!
    queryKey: ['bookings', filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, error, bookings };
}
