import { useProviderAuth } from '../contexts/ProviderAuthContext';
import { User, Mail, MapPin } from 'lucide-react';

function ProviderAccountPage() {
  const { provider } = useProviderAuth();

  if (!provider) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Account</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h2>
        <form className="space-y-4">
          <div className="flex items-center">
            <User className="h-5 w-5 text-gray-500 mr-3" />
            <span className="font-semibold w-32">Name:</span>
            <input type="text" value={provider.name} disabled className="flex-1 p-2 bg-gray-100 rounded" />
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 mr-3" />
            <span className="font-semibold w-32">Email:</span>
            <input type="email" value={provider.email} disabled className="flex-1 p-2 bg-gray-100 rounded" />
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-500 mr-3" />
            <span className="font-semibold w-32">City:</span>
            <input type="text" value={provider.place.city} disabled className="flex-1 p-2 bg-gray-100 rounded" />
          </div>
          <button className="mt-6 bg-emerald-500 text-white px-6 py-2 rounded-lg" disabled>
            Update Profile (Disabled)
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProviderAccountPage;