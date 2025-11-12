import { Box, User, Calendar } from 'lucide-react';

function ProviderOrdersPage() {
  // Mock data for demo
  const orders = [
    { id: 'o1', client: 'Fadi Subair', date: '2025-12-10', status: 'Confirmed' },
    { id: 'o2', client: 'Jane Smith', date: '2025-12-18', status: 'Pending' },
    { id: 'o3', client: 'Michael Chen', date: '2025-11-20', status: 'Completed' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Orders</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="p-4 border rounded-lg flex flex-col md:flex-row justify-between items-center">
              <div>
                <h4 className="text-xl font-semibold text-emerald-700">Order #{order.id}</h4>
                <div className="flex items-center text-gray-600 mt-1">
                  <User className="h-5 w-5 mr-2" />
                  <span>Client: {order.client}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Event Date: {order.date}</span>
                </div>
              </div>
              <span className={`text-lg font-semibold px-3 py-1 rounded-full ${
                order.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProviderOrdersPage;