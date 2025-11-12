import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import { Sparkles, Home, Box, User, BarChart, LogOut } from 'lucide-react';
import { useProviderAuth } from '../../contexts/ProviderAuthContext';

function ProviderLayout() {
  const { provider, providerLogout } = useProviderAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    providerLogout();
    navigate('/'); // Go to client homepage on logout
  };

  // Helper for NavLink styling
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-700 rounded-lg'
      : 'flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-emerald-600 rounded-lg';

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <Sparkles className="h-8 w-8 text-emerald-500" />
          <span className="ml-2 text-xl font-bold">Provider Portal</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavLink to="/provider/dashboard" className={getNavLinkClass} end>
            <Home className="h-5 w-5 mr-3" />
            Home
          </NavLink>
          <NavLink to="/provider/orders" className={getNavLinkClass}>
            <Box className="h-5 w-5 mr-3" />
            Orders
          </NavLink>
          <NavLink to="/provider/analytics" className={getNavLinkClass}>
            <BarChart className="h-5 w-5 mr-3" />
            Analytics
          </NavLink>
          <NavLink to="/provider/account" className={getNavLinkClass}>
            <User className="h-5 w-5 mr-3" />
            Account
          </NavLink>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-emerald-600 rounded-lg"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-20 flex items-center justify-end px-8">
          <p className="font-semibold">Welcome, {provider?.name || 'Provider'}</p>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet /> {/* This is where the page content (Dashboard, Orders, etc.) will render */}
        </main>
      </div>
    </div>
  );
}

export default ProviderLayout;