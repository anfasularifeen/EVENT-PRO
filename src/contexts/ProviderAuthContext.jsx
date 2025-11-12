import { createContext, useContext, useState } from 'react';

const ProviderAuthContext = createContext(null);

// Tiering thresholds (USD) based on our discussion:
const TIER_THRESHOLDS = {
    // For simplicity, we use the highest category (Photography/Venue) as the anchor:
    STARTER_MAX: 1000,
    PREMIUM_MAX: 4000, // Implies $1001 to $4000
    LUXURY_MIN: 4001,  // Implies $4001 and above
};


export const ProviderAuthProvider = ({ children }) => {
  const [provider, setProvider] = useState(null); // The logged-in provider

  // Simulate a provider login (kept the same)
  const providerLogin = (email, password) => {
    // In a real app, check DB. For now, mock a successful login.
    setProvider({
      id: 'p1',
      name: 'Mock Provider',
      type: 'Photography',
      email: email,
      photo: 'https://images.unsplash.com/photo-1452696024259-cb7474e79a6d?w=800&q=80',
      description: 'A mock provider account for demo purposes.',
      place: { city: 'New York', district: 'Manhattan', state: 'NY', pin: '10001' },
      tier: 'Premium' // Default mock tier
    });
    return true;
  };

  // Simulate a provider registration
  const providerRegister = (formData) => {
    
    let tier = 'Starter';
    const price = formData.price;

    // MOCK TIERING LOGIC based on submitted price
    if (price <= TIER_THRESHOLDS.STARTER_MAX) {
        tier = 'Starter';
    } else if (price > TIER_THRESHOLDS.STARTER_MAX && price <= TIER_THRESHOLDS.PREMIUM_MAX) {
        tier = 'Premium';
    } else if (price >= TIER_THRESHOLDS.LUXURY_MIN) {
        tier = 'Luxury';
    }
    
    // In a real app, the backend would save this data to the correct collection.
    console.log(`Registering provider: ${formData.name} at price $${price}. Assigned to TIER: ${tier}`);

    // Log them in immediately after register, including the determined tier
    setProvider({
      id: `p_${Date.now()}`,
      tier: tier, // Set the determined tier
      ...formData
    });
    return true;
  };

  // Simulate a logout
  const providerLogout = () => {
    setProvider(null);
  };

  return (
    <ProviderAuthContext.Provider value={{ provider, providerLogin, providerRegister, providerLogout }}>
      {children}
    </ProviderAuthContext.Provider>
  );
};

// Custom hook to easily access the provider auth state
export const useProviderAuth = () => {
  return useContext(ProviderAuthContext);
};