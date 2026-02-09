import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // 1. Remove all queries from the cache (critical for security!)
      queryClient.removeQueries();

      // 2. Redirect to login page
      navigate('/login', { replace: true });
    },
    onError: () => {
      toast.error('There was a problem logging out');
    },
  });

  return { logout, isPending };
}
