import { useProviderAuth } from '../contexts/ProviderAuthContext';
import { Star, MapPin, DollarSign, Calendar } from 'lucide-react';

function ProviderDashboardPage() {
  const { provider } = useProviderAuth();

  if (!provider) return <div>Loading provider data...</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Welcome, {provider.name}!
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-500 mb-2">Total Earnings (Mock)</h3>
          <div className="flex items-center text-3xl font-bold text-emerald-600">
            <DollarSign className="h-8 w-8" />
            <span className="ml-2">5,420</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-500 mb-2">Completed Orders (Mock)</h3>
          <div className="flex items-center text-3xl font-bold text-gray-800">
            <Calendar className="h-8 w-8 text-gray-400" />
            <span className="ml-2">15</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-500 mb-2">Your Rating (Mock)</h3>
          <div className="flex items-center text-3xl font-bold text-yellow-500">
            <Star className="h-8 w-8 fill-yellow-500" />
            <span className="ml-2">4.8</span>
          </div>
        </div>
      </div>

      {/* Your Profile Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Profile</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img src={provider.photo} alt={provider.name} className="w-40 h-40 rounded-lg object-cover" />
          <div>
            <h3 className="text-2xl font-bold">{provider.name}</h3>
            <p className="text-lg font-semibold text-emerald-600">{provider.type}</p>
            <p className="text-gray-700 mt-2">{provider.description}</p>
            <div className="flex items-center text-gray-600 mt-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{provider.place.city}, {provider.place.state}, {provider.place.pin}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderDashboardPage;