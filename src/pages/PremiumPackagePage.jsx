import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Eye, Plus, X, Zap } from 'lucide-react';
import { useEventData } from '../hooks/useEventData';
import SelectedProvidersCard from '../components/common/SelectedProvidersCard';

// --- Mock Data Extension for Demo (Mid-Tier) ---
const mockPremiumProviders = [
    // VENUE PROVIDERS
    { id: 'p_v1', category: 'venue', name: 'The City View Loft', specialty: 'Rooftop Events', price: 7500, rating: 4.8, location: { city: 'New York', country: 'USA' } },
    { id: 'p_v2', category: 'venue', name: 'Grand Hotel Banquet', specialty: 'Mid-Sized Weddings', price: 6000, rating: 4.7, location: { city: 'London', country: 'UK' } },

    // PHOTOGRAPHY PROVIDERS
    { id: 'p_p1', category: 'photography', name: 'Artisan Photography', specialty: 'Full-Day Coverage', price: 2500, rating: 4.7, location: { city: 'London', country: 'UK' } },
    { id: 'p_p2', category: 'photography', name: 'Moment Capture Co.', specialty: 'Editorial Style', price: 3200, rating: 4.6, location: { city: 'New York', country: 'USA' } },
    
    // VIDEOGRAPHY PROVIDERS
    { id: 'p_vdo1', category: 'videography', name: 'Narrative Films', specialty: 'Cinematic Highlight Reel', price: 3000, rating: 4.6, location: { city: 'New York', country: 'USA' } },
    { id: 'p_vdo2', category: 'videography', name: 'The Drone Crew', specialty: 'Aerial Footage Included', price: 3500, rating: 4.7, location: { city: 'Paris', country: 'France' } },

    // CATERING PROVIDERS
    { id: 'p_c1', category: 'catering', name: 'Gourmet Table', specialty: 'Custom Plated Menus', price: 65, rating: 4.9, location: { city: 'Paris', country: 'France' } },
    { id: 'p_c2', category: 'catering', name: 'Farm-to-Fork Events', specialty: 'Organic & Local Focus', price: 75, rating: 4.8, location: { city: 'Tokyo', country: 'Japan' } },

    // ENTERTAINMENT PROVIDERS
    { id: 'p_e1', category: 'entertainment', name: 'The Live Band', specialty: 'Acoustic & Pop Covers', price: 3500, rating: 4.8, location: { city: 'Tokyo', country: 'Japan' } },
    { id: 'p_e2', category: 'entertainment', name: 'Professional DJ', specialty: 'Custom Playlists & MC', price: 1800, rating: 4.6, location: { city: 'London', country: 'UK' } },

    // DECORATION PROVIDERS
    { id: 'p_d1', category: 'decoration', name: 'Modern Events Decor', specialty: 'Lighting and Draping', price: 3000, rating: 4.5, location: { city: 'Paris', country: 'France' } },
    
    // FLORAL PROVIDERS
    { id: 'p_f1', category: 'floral', name: 'Petal Pusher', specialty: 'Seasonal Arrangements', price: 2000, rating: 4.7, location: { city: 'New York', country: 'USA' } },
];
// --- End Mock Data ---

function PremiumPackagePage() {
  const { selectedProviders, addProviderToPackage, removeProviderFromPackage } = useEventData();
  const [filterLocation, setFilterLocation] = useState('all');
  
  const providersByCategory = mockPremiumProviders.reduce((acc, provider) => {
      const category = provider.category;
      if (!acc[category]) {
          acc[category] = [];
      }
      acc[category].push(provider);
      return acc;
  }, {});

  const serviceCategories = Object.keys(providersByCategory);

  const uniqueLocations = [...new Set(mockPremiumProviders.map(p => p.location.city))];

  const filterProviders = (providers) => {
    if (filterLocation === 'all') return providers;
    return providers.filter(p => p.location.city === filterLocation);
  };
  
  const handleAddRemove = (provider) => {
    const isSelected = selectedProviders[provider.category]?.id === provider.id;
    if (isSelected) {
      removeProviderFromPackage(provider.category);
    } else {
      addProviderToPackage(provider.category, { ...provider, price: provider.price }); 
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">Premium Package Providers</h1>
        <p className="text-xl text-yellow-600 text-center mb-8">The perfect balance of quality and cost.</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN: Providers List */}
          <div className="lg:flex-1 space-y-12">
            
            {/* Location Filter */}
            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
              <label htmlFor="location" className="text-lg font-semibold text-gray-700 mr-4">Filter by Location:</label>
              <select
                id="location"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Locations</option>
                {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            {/* Service Category Sections */}
            {serviceCategories.map(category => (
              <div key={category} className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 capitalize border-b pb-2">
                  {category} Providers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filterProviders(providersByCategory[category] || []).map(provider => {
                    const isSelected = selectedProviders[category]?.id === provider.id;
                    
                    return (
                      <div key={provider.id} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-yellow-400">
                        <h3 className="text-xl font-bold text-gray-800">{provider.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{provider.specialty}</p>
                        <div className="flex justify-between items-center text-sm mb-4">
                          <span className="font-semibold text-yellow-600">${provider.price.toLocaleString()}</span>
                          <div className="flex items-center text-yellow-500">
                            <Star className="h-4 w-4 fill-yellow-500 mr-1" />{provider.rating}
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <button 
                            className="flex-1 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold transition"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </button>
                          <button
                            onClick={() => handleAddRemove(provider)}
                            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold transition ${
                              isSelected 
                                ? 'bg-red-500 hover:bg-red-600 text-white'
                                : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <X className="h-4 w-4 mr-2" />
                                Remove
                              </>
                            ) : (
                              <>
                                <Plus className="h-4 w-4 mr-2" />
                                Add
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Selected Providers Card (The Cart) */}
          <div className="lg:w-80 lg:mt-0">
            <SelectedProvidersCard tierName="Premium" />
          </div>
          
        </div>
        
        <div className="text-center mt-12">
            <Link to="/packages" className="text-blue-500 hover:underline font-semibold">
                &larr; Back to All Packages
            </Link>
        </div>
      </div>
    </div>
  );
}

export default PremiumPackagePage;