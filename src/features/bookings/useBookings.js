import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getBookings } from '../../services/apiBookings';
import { PAGE_SIZE } from '../../utils/constants';

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // 1. FILTER
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  // 2. SORTING
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // 3. PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // 4. QUERY
  const {
    isLoading,
    // Destructure the object returned from getBookings
    data,
    error,
  } = useQuery({
    // Add 'page' to queryKey so it refetches when page changes
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  console.log(data);

  const bookings = data?.data;
  const count = data?.count;
  // 5. PRE-FETCHING (The "Pro" touch)
  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Fetch next page if we aren't on the last one
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  // Fetch previous page if we aren't on the first one
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, bookings, count };
}
