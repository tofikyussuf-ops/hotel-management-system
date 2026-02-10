import { useMutation } from '@tanstack/react-query';
import { verifyCurrentPassword } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useVerifyPassword() {
  const { mutate: verifyPassword, isPending: isVerifying } = useMutation({
    mutationFn: verifyCurrentPassword,
    onError: (err) => toast.error(err.message),
  });

  return { verifyPassword, isVerifying };
}
