import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Use new context

function ClientDashboardPage() {
  const { user, logout } = useAuth(); // Use new context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <div className="pt-32 text-center"><h2 className="text-2xl">Loading...</h2></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome, {user.name}!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            This is your **Client Dashboard**. From here you can manage your booked events.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Your Email:</strong> {user.email}
          </p>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboardPage;