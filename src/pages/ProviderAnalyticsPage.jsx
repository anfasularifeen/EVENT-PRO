import { Eye, DollarSign, Users } from 'lucide-react';

function ProviderAnalyticsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Analytics</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Performance (Last 30 Days)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Eye className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
            <p className="text-4xl font-bold text-gray-800">1,204</p>
            <p className="text-gray-500">Profile Views</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <DollarSign className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
            <p className="text-4xl font-bold text-gray-800">$1,850</p>
            <p className="text-gray-500">Revenue</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Users className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
            <p className="text-4xl font-bold text-gray-800">8</p>
            <p className="text-gray-500">New Bookings</p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">(This is mock data for demonstration purposes)</p>
      </div>
    </div>
  );
}

export default ProviderAnalyticsPage;