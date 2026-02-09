import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getBookings } from '../../services/apiBookings';
import { PAGE_SIZE } from '../../utils/constants';
import { useEffect, useRef } from 'react';

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Get current values from URL
  const filterValue = searchParams.get('status') || 'all';
  const pageFromUrl = Number(searchParams.get('page')) || 1;

  // 2. Track the previous filter to detect a change
  const prevFilterRef = useRef(filterValue);

  // 3. LOGIC: If the filter just changed, we MUST use page 1
  const filterHasChanged = prevFilterRef.current !== filterValue;
  const currentPage = filterHasChanged ? 1 : pageFromUrl;

  // 4. FILTER/SORT objects
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // 5. THE QUERY (Uses 'currentPage', not 'pageFromUrl')
  const { isLoading, data, error } = useQuery({
    queryKey: ['bookings', filter, sortBy, currentPage],
    queryFn: () => getBookings({ filter, sortBy, page: currentPage }),
    retry: false,
  });

  // 6. SYNC THE URL (Clean up the address bar after the fetch starts)
  useEffect(() => {
    if (filterHasChanged) {
      searchParams.set('page', 1);
      setSearchParams(searchParams, { replace: true });
      prevFilterRef.current = filterValue;
    }
  }, [filterValue, filterHasChanged, searchParams, setSearchParams]);

  const bookings = data?.data;
  const count = data?.count;

  // 7. PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (count && currentPage < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, currentPage + 1],
      queryFn: () => getBookings({ filter, sortBy, page: currentPage + 1 }),
    });
  }

  return { isLoading, error, bookings, count };
}
