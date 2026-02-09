import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import { useUser } from './useLogin';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If NO authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a full-page spinner
  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-grey-50">
        <Spinner />
      </div>
    );

  // 4. If there IS a user, render the app (children)
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
