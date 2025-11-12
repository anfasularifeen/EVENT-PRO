import { Users, Calendar, Camera, CheckCircle } from 'lucide-react';

function ClientFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Powerful Features for Clients
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Guest Management</h4>
                  <p className="text-gray-600">
                    Track RSVPs, dietary preferences, and seating arrangements effortlessly
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Timeline Builder</h4>
                  <p className="text-gray-600">
                    Create and visualize your event schedule with drag-and-drop simplicity
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                  <Camera className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Real-Time Updates</h4>
                  <p className="text-gray-600">
                    Get instant notifications and access your event dashboard anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-2xl p-8 transform rotate-2">
              <div className="bg-white rounded-lg p-6 transform -rotate-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">DASHBOARD</span>
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Wedding Event</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-sm text-gray-500">Guests</p>
                      <p className="text-xl font-bold text-gray-800">147</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-sm text-gray-500">Days Left</p>
                      <p className="text-xl font-bold text-gray-800">42</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Event Progress</span>
                      <span className="text-emerald-600 font-semibold">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientFeaturesSection;