import { Navigate, Outlet } from 'react-router-dom';
import { useProviderAuth } from '../../contexts/ProviderAuthContext';

function ProviderProtectedRoute() {
  const { provider } = useProviderAuth();

  if (!provider) {
    // If no provider user, redirect to provider login
    return <Navigate to="/provider/login" replace />;
  }

  // If provider user exists, show the child layout/page
  return <Outlet />;
}

export default ProviderProtectedRoute;