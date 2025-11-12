import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function ProtectedRoute() {
  const { user } = useAuth();

  if (!user) {
    // If no user, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If user exists, show the child route (e.g., DashboardPage)
  return <Outlet />;
}

export default ProtectedRoute;