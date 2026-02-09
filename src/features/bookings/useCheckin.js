import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    // 1. The function that calls Supabase
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
      }),

    // 2. What happens on success
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      // Invalidate all active queries to force a refetch of fresh data
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },

    // 3. What happens on error
    onError: () => toast.error('There was an error while checking in'),
  });

  return { checkin, isCheckingIn };
}
