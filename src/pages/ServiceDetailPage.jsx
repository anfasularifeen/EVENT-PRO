import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEventData } from '../hooks/useEventData';
import { Mail, User, Calendar, ArrowLeft, MapPin } from 'lucide-react';

// 1. Import your mock provider data to find locations
import { mockProviders } from '../data/mockProviders';

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const { services } = useEventData();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === parseInt(serviceId));

  // --- 2. NEW LOGIC: Find unique locations for *this* service ---
  const getUniqueLocations = () => {
    if (!service) return [];

    // Get the category (e.g., 'photography', 'venue')
    const providerCategory = service.category;
    const providersForCategory = mockProviders[providerCategory] || [];

    // Use a Set to store unique location strings (e.g., "New York|USA")
    const locationStrings = new Set(
      providersForCategory.map(p => `${p.location.city}|${p.location.country}`)
    );

    // Convert the Set back to an array of objects
    return Array.from(locationStrings).map(locString => {
      const [city, country] = locString.split('|');
      return { city, country };
    });
  };

  const uniqueLocations = getUniqueLocations();
  // --- End of new logic ---

  if (!service) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-emerald-600 hover:underline">
          &larr; Back to all services
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const searchDate = formData.get('date');
    
    // 3. Get the selected location string (e.g., "New York|USA")
    const locationString = formData.get('location');
    const [searchCity, searchCountry] = locationString.split('|');

    // Navigate to the provider list page with the selected city and country
    navigate('/providers', {
      state: {
        searchDate: searchDate,
        searchCity: searchCity,
        searchCountry: searchCountry,
        service: service
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/services"
            className="flex items-center text-gray-600 hover:text-emerald-600 font-semibold transition"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Services
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side: Details (No Change) */}
            <div className="p-6">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <h1 className="text-4xl font-bold text-gray-800 mb-3">{service.name}</h1>
              <p className="text-3xl text-emerald-600 font-semibold mb-6">
                From ${service.budget.toLocaleString()}
              </p>
              <p className="text-gray-700 text-lg">
                Our {service.name} package is perfect for making your event unforgettable.
                We handle all the details, from venue selection to day-of coordination,
                ensuring a seamless and beautiful experience.
              </p>
            </div>

            {/* Right Side: Updated Form */}
            <div className="p-8 bg-gray-50 border-l border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Providers</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="h-5 w-5 text-gray-400" />
                    </span>
                    <input type="text" id="name" name="name" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="John Doe" />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </span>
                    <input type="email" id="email" name="email" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="you@example.com" />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Event Date
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </span>
                    <input type="date" id="date" name="date" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                {/* --- 4. UPDATED LOCATION DROPDOWN --- */}
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Available Locations
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </span>
                    <select
                      id="location"
                      name="location"
                      required
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg"
                    >
                      <option value="" disabled selected>Select a location...</option>
                      {uniqueLocations.map(loc => (
                        <option
                          key={`${loc.city}-${loc.country}`}
                          value={`${loc.city}|${loc.country}`}
                        >
                          {loc.city}, {loc.country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
                >
                  Find Providers
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailPage;