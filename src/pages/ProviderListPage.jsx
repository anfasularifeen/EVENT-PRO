import { useLocation, Link, useNavigate } from 'react-router-dom';
import { mockProviders } from '../data/mockProviders';
import { Star, MapPin } from 'lucide-react';

function ProviderListPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { searchDate, searchCity, searchCountry, service } = location.state || {};

  if (!service) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold mb-4">No service selected.</h2>
        <Link to="/services" className="text-emerald-600 hover:underline">
          &larr; Please select a service first
        </Link>
      </div>
    );
  }

  const providerType = service.category;
  const availableProviders = mockProviders[providerType] || [];

  // --- 1. UPDATED FILTERING LOGIC (use === for exact match) ---
  const filteredProviders = availableProviders.filter((provider) => {
    const cityMatch = provider.location.city.toLowerCase() === searchCity.toLowerCase();
    const countryMatch = provider.location.country.toLowerCase() === searchCountry.toLowerCase();
    return cityMatch && countryMatch;
  });

  const handleBookProvider = (providerName) => {
    alert(`Thank you! Your request to book ${providerName} has been sent. We will confirm availability and contact you shortly.`);
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Available {service.name} Providers
          </h1>
          <p className="text-xl text-gray-600">
            Showing results for <span className="font-semibold text-emerald-600">{searchCity}, {searchCountry}</span> on <span className="font-semibold text-emerald-600">{searchDate}</span>
          </p>
        </div>

        <div className="space-y-6">
          {filteredProviders.length > 0 ? (
            filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{provider.name}</h3>
                  <p className="text-gray-600 mb-2">{provider.specialty}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-5 w-5 fill-yellow-500" />
                      <span className="ml-1 font-bold">{provider.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-5 w-5" />
                      <span className="ml-1">{provider.location.city}, {provider.location.country}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={() => handleBookProvider(provider.name)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Providers Found</h3>
              <p className="text-gray-600">
                Sorry, we couldn't find any {service.name} providers in {searchCity}, {searchCountry}.
                <br />
                This service may not be available in this location yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProviderListPage;