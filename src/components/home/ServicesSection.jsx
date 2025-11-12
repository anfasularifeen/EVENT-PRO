import { Heart, Check } from 'lucide-react';
import { Link } from 'react-router-dom'; // Correct: Link for routing

function ServicesSection(props) {
  const {
    filteredServices,
    favorites,
    toggleFavorite,
    filterEventType,
    setFilterEventType,
    filterCategories,
    toggleCategory,
  } = props;

  const categories = ['planning', 'photography', 'catering', 'entertainment', 'decoration', 'venue'];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Filter and find the perfect services for your event
          </p>
        </div>

        {/* Filter Bar: Removed sticky positioning to address scrolling issue */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 z-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Event Type
              </label>
              <select
                value={filterEventType}
                onChange={(e) => setFilterEventType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="all">All Events</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                      filterCategories.includes(category)
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Stop Link navigation
                    e.stopPropagation(); // Stop event bubbling
                    toggleFavorite(service.id);
                  }}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition z-10"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(service.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-emerald-600 font-semibold">From ${service.budget.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No services match your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesSection;