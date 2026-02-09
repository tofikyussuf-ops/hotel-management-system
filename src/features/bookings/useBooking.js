import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBooking } from '../../services/apiBookings';

export function useBooking() {
  // 1. Get the ID from the URL params
  const { bookingId } = useParams();

  // 2. Fetch the data
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    // The queryKey includes bookingId so it refetches if the ID changes
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    // Don't try to fetch if there is no ID
    retry: false,
  });

  return { isLoading, error, booking };
}
