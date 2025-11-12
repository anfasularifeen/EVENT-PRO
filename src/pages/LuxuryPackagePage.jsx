import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Eye, Plus, X, Crown } from 'lucide-react';
import { useEventData } from '../hooks/useEventData';
import SelectedProvidersCard from '../components/common/SelectedProvidersCard';

// --- Mock Data Extension for Demo (High-Tier) ---
const mockLuxuryProviders = [
    // VENUE PROVIDERS
    { id: 'l_v1', category: 'venue', name: 'The Royal Estate', specialty: 'Exclusive Mansion Hire', price: 15000, rating: 5.0, location: { city: 'New York', country: 'USA' } },
    { id: 'l_v2', category: 'venue', name: 'Grand Ballroom', specialty: 'High-Capacity Gala Hall', price: 18000, rating: 4.7, location: { city: 'New York', country: 'USA' } },
    
    // PHOTOGRAPHY PROVIDERS
    { id: 'l_p1', category: 'photography', name: 'International Photogs', specialty: 'Destination Weddings', price: 6000, rating: 4.9, location: { city: 'Paris', country: 'France' } },
    { id: 'l_p2', category: 'photography', name: 'Bespoke Films & Photo', specialty: 'High-Art Visuals', price: 7500, rating: 5.0, location: { city: 'London', country: 'UK' } },
    
    // VIDEOGRAPHY PROVIDERS
    { id: 'l_vdo1', category: 'videography', name: 'Epic Cinema House', specialty: 'Drone and Feature Film', price: 7000, rating: 5.0, location: { city: 'London', country: 'UK' } },
    { id: 'l_vdo2', category: 'videography', name: '4K Storytellers', specialty: 'Full-Event Documentary', price: 5500, rating: 4.8, location: { city: 'New York', country: 'USA' } },

    // CATERING PROVIDERS
    { id: 'l_c1', category: 'catering', name: 'Michelin Star Catering', specialty: 'Private Chef Experience', price: 150, rating: 5.0, location: { city: 'Tokyo', country: 'Japan' } },
    { id: 'l_c2', category: 'catering', name: 'Haute Cuisine Events', specialty: 'Molecular Gastronomy', price: 180, rating: 4.9, location: { city: 'Paris', country: 'France' } },

    // ENTERTAINMENT PROVIDERS
    { id: 'l_e1', category: 'entertainment', name: 'Symphonic Orchestra', specialty: 'Classical & Custom Scores', price: 10000, rating: 4.9, location: { city: 'New York', country: 'USA' } },
    
    // DECORATION PROVIDERS
    { id: 'l_d1', category: 'decoration', name: 'Bespoke Art & Decor', specialty: 'Custom Scenography', price: 7000, rating: 5.0, location: { city: 'Paris', country: 'France' } },
    
    // FLORAL PROVIDERS
    { id: 'l_f1', category: 'floral', name: 'Master Florists', specialty: 'Luxury Botanical Design', price: 4000, rating: 4.8, location: { city: 'London', country: 'UK' } },
];
// --- End Mock Data ---

function LuxuryPackagePage() {
  const { selectedProviders, addProviderToPackage, removeProviderFromPackage } = useEventData();
  const [filterLocation, setFilterLocation] = useState('all');
  
  const providersByCategory = mockLuxuryProviders.reduce((acc, provider) => {
      const category = provider.category;
      if (!acc[category]) {
          acc[category] = [];
      }
      acc[category].push(provider);
      return acc;
  }, {});

  const serviceCategories = Object.keys(providersByCategory);

  const uniqueLocations = [...new Set(mockLuxuryProviders.map(p => p.location.city))];

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
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">Luxury Package Providers</h1>
        <p className="text-xl text-purple-600 text-center mb-8">For an exclusive and bespoke event experience.</p>
        
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
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
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
                      <div key={provider.id} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-purple-400">
                        <h3 className="text-xl font-bold text-gray-800">{provider.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{provider.specialty}</p>
                        <div className="flex justify-between items-center text-sm mb-4">
                          <span className="font-semibold text-purple-600">${provider.price.toLocaleString()}</span>
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
                                : 'bg-purple-500 hover:bg-purple-600 text-white'
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
            <SelectedProvidersCard tierName="Luxury" />
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

export default LuxuryPackagePage;