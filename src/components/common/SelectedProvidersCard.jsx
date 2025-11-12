import React from 'react';
import { X, CheckCircle, Package } from 'lucide-react';
import { useEventData } from '../../hooks/useEventData';

function SelectedProvidersCard({ tierName }) {
  // 1. Retrieve state and actions from the hook
  const { selectedProviders, removeProviderFromPackage } = useEventData();
  
  // 2. CRITICAL FIX: Ensure providerList is derived from Object.values()
  // This converts the {category: provider} object into an array of providers for mapping and reducing.
  const providerList = Object.values(selectedProviders);

  // 3. FIX for Total Price: Aggressive numeric parsing to handle hidden string artifacts.
  const totalPrice = providerList.reduce((sum, provider) => {
      // Safely access the price. It must be converted to a string first to use replace().
      let priceString = String(provider.price);
      
      // Strip any non-numeric characters (like hidden commas, spaces)
      const numericPriceString = priceString.replace(/[^0-9.]/g, '');
      
      // Convert to number, falling back to 0 if NaN is encountered
      const priceValue = Number(numericPriceString) || 0;
      
      return sum + priceValue;
  }, 0); 

  // 4. FIX for Total Services Added: Use the length of the derived providerList.
  const totalServices = providerList.length;

  return (
    // Note: top-20 className ensures the card sticks as a sidebar
    <div className="sticky top-20 w-full lg:w-80 bg-white rounded-lg shadow-2xl p-6 h-fit">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <Package className="h-6 w-6 text-emerald-500 mr-2" />
          Your {tierName} Package
        </h3>
      </div>
      
      {providerList.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Start adding services to your package!</p>
      ) : (
        <ul className="space-y-3 mb-6">
          {providerList.map(provider => (
            <li key={provider.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">{provider.name}</p>
                <p className="text-sm text-emerald-600 capitalize">{provider.category}</p>
                {/* Displaying price per service, explicitly converting to Number for safety */}
                <p className="text-xs text-gray-500">${Number(provider.price).toLocaleString()}</p> 
              </div>
              <button 
                onClick={() => removeProviderFromPackage(provider.category)}
                className="text-red-500 hover:text-red-700 p-1 rounded-full transition"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Summary */}
      <div className="border-t pt-4">
        <div className="flex justify-between font-semibold text-lg mb-2">
          <span>Total Services Added:</span>
          <span>{totalServices} / 8</span> 
        </div>
        <div className="flex justify-between font-bold text-2xl text-emerald-600">
          <span>Total Price (Mock):</span>
          {/* Output the correctly formatted total price */}
          <span>${totalPrice.toLocaleString()}</span>
        </div>
        <button
          disabled={totalServices === 0}
          className={`w-full mt-4 py-3 rounded-lg text-white font-semibold transition ${
            totalServices > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default SelectedProvidersCard;