import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../services/apiAuth';

import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Manually set the user data in the cache to avoid a re-fetch
      queryClient.setQueryData(['user'], user.user);

      toast.success('Welcome back!');
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('The provided email or password is incorrect');
    },
  });

  return { login, isPending };
}

export function useUser() {
  const {
    isLoading,
    data: user,
    fetchStatus,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === 'authenticated',
    // 'fetching' helps distinguish between loading and background refresh
    isFetching: fetchStatus === 'fetching',
  };
}
