import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Eye, Plus, X, Sparkles } from 'lucide-react';
import { useEventData } from '../hooks/useEventData';
import SelectedProvidersCard from '../components/common/SelectedProvidersCard';

// --- CORRECTED MOCK DATA EXTENSION FOR STARTER PAGE (Numeric Prices Only) ---
// Prices are defined as NUMERIC LITERALS (e.g., 2500, not "2,500").
const mockStarterProviders = [
    // VENUE PROVIDERS
    { id: 's_v1', category: 'venue', name: 'The Community Hall', specialty: 'Small Events', price: 2500, rating: 4.5, location: { city: 'New York', country: 'USA' } },
    { id: 's_v2', category: 'venue', name: 'Local Church Venue', specialty: 'Ceremonies Only', price: 1500, rating: 4.2, location: { city: 'London', country: 'UK' } },
    
    // PHOTOGRAPHY PROVIDERS
    { id: 's_p1', category: 'photography', name: 'Local Shutter', specialty: 'Quick Portraits', price: 800, rating: 4.2, location: { city: 'London', country: 'UK' } },
    { id: 's_p2', category: 'photography', name: 'Daylight Shoots', specialty: 'Half-Day Only', price: 950, rating: 4.0, location: { city: 'Paris', country: 'France' } },
    { id: 's_p3', category: 'photography', name: 'Budget Lens', specialty: 'Digital Only', price: 600, rating: 4.1, location: { city: 'Tokyo', country: 'Japan' } },
    
    // VIDEOGRAPHY PROVIDERS
    { id: 's_vdo1', category: 'videography', name: 'Mobile Reel', specialty: 'Simple Edit', price: 1000, rating: 3.9, location: { city: 'New York', country: 'USA' } },

    // CATERING PROVIDERS
    { id: 's_c1', category: 'catering', name: 'Budget Bites', specialty: 'Buffet Style', price: 15, rating: 4.0, location: { city: 'Tokyo', country: 'Japan' } },
    { id: 's_c2', category: 'catering', name: 'Simple Samplers', specialty: 'Sandwiches & Snacks', price: 10, rating: 4.1, location: { city: 'New York', country: 'USA' } },

    // ENTERTAINMENT PROVIDERS
    { id: 's_e1', category: 'entertainment', name: 'Spotify DJ', specialty: 'Playlist Management', price: 200, rating: 4.1, location: { city: 'London', country: 'UK' } },
    
    // DECORATION PROVIDERS
    { id: 's_d1', category: 'decoration', name: 'Simple Setup', specialty: 'Basic Decor', price: 500, rating: 4.3, location: { city: 'New York', country: 'USA' } },
    
    // FLORAL PROVIDERS
    { id: 's_f1', category: 'floral', name: 'Backyard Blooms', specialty: 'Small Table Centers', price: 500, rating: 4.0, location: { city: 'Paris', country: 'France' } },
];
// --- End CORRECTED MOCK DATA ---


function StarterPackagePage() {
  const { selectedProviders, addProviderToPackage, removeProviderFromPackage } = useEventData();
  const [filterLocation, setFilterLocation] = useState('all');
  
  // Group providers by service category
  const providersByCategory = mockStarterProviders.reduce((acc, provider) => {
      const category = provider.category;
      if (!acc[category]) {
          acc[category] = [];
      }
      acc[category].push(provider);
      return acc;
  }, {});

  // List of all service categories to display headings
  const serviceCategories = Object.keys(providersByCategory);

  // Get unique locations for the filter dropdown (simplified to just city for mock)
  const uniqueLocations = [...new Set(mockStarterProviders.map(p => p.location.city))];


  // Apply location filter
  const filterProviders = (providers) => {
    if (filterLocation === 'all') return providers;
    return providers.filter(p => p.location.city === filterLocation);
  };
  
  const handleAddRemove = (provider) => {
    const isSelected = selectedProviders[provider.category]?.id === provider.id;
    if (isSelected) {
      removeProviderFromPackage(provider.category);
    } else {
      // CRITICAL: Explicitly ensuring the price is a NUMBER before adding to state
      addProviderToPackage(provider.category, { ...provider, price: Number(provider.price) });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">Starter Package Providers</h1>
        <p className="text-xl text-emerald-600 text-center mb-8">Essentials for your budget-friendly event.</p>
        
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
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
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
                      <div key={provider.id} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-emerald-400">
                        <h3 className="text-xl font-bold text-gray-800">{provider.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{provider.specialty}</p>
                        <div className="flex justify-between items-center text-sm mb-4">
                          {/* Displaying price with correct formatting */}
                          <span className="font-semibold text-emerald-600">${Number(provider.price).toLocaleString()}</span>
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
                                : 'bg-emerald-500 hover:bg-emerald-600 text-white'
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
            <SelectedProvidersCard tierName="Starter" />
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

export default StarterPackagePage;