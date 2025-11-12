import { useState, useEffect } from 'react';

export const useEventData = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [filterEventType, setFilterEventType] = useState('all');
  const [filterCategories, setFilterCategories] = useState([]);
  
  // State to store selected providers in the current package builder 
  const [selectedProviders, setSelectedProviders] = useState({});

  // Function: Adds or replaces a provider for a specific category
  const addProviderToPackage = (category, provider) => {
      // CRITICAL FIX: Explicitly convert and save the price as a NUMBER
      const newProvider = { ...provider, price: Number(provider.price) };

      setSelectedProviders(prev => ({
          ...prev,
          [category]: newProvider 
      }));
  };

  // Function: Removes a provider from the package
  const removeProviderFromPackage = (category) => {
      setSelectedProviders(prev => {
          // Use destructuring to safely remove the property and create a new object reference
          const { [category]: removed, ...newProviders } = prev;
          return newProviders;
      });
  };

  const packages = [
    {
      id: 1,
      name: 'Starter',
      price: '$2,999',
      features: [
        'Up to 50 guests',
        'Venue coordination',
        'Basic catering',
        'Event timeline planning',
        'Day-of coordination'
      ]
    },
    {
      id: 2,
      name: 'Premium',
      price: '$7,999',
      popular: true,
      features: [
        'Up to 150 guests',
        'Premium venue options',
        'Full catering service',
        'Professional photography',
        'Entertainment booking',
        'Custom decorations',
        'Complete event management'
      ]
    },
    {
      id: 3,
      name: 'Luxury',
      price: '$15,999',
      features: [
        'Unlimited guests',
        'Exclusive venue access',
        'Gourmet catering',
        'Photo & video coverage',
        'Live entertainment',
        'Luxury decorations',
        'Personal event concierge',
        'Post-event services'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wedding Client',
      text: 'EventPlanner Pro made our dream wedding a reality. Every detail was perfect, and we could actually enjoy our special day!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Event',
      text: 'Professional, efficient, and creative. Our company conference was flawless thanks to their expert team.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Birthday Celebration',
      text: 'They turned my 40th birthday into an unforgettable celebration. Highly recommend their services!',
      rating: 5
    }
  ];

  const services = [
    { id: 1, name: 'Wedding Planning', type: 'wedding', budget: 8000, category: 'planning', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80' },
    { id: 2, name: 'Corporate Events', type: 'corporate', budget: 5000, category: 'planning', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80' },
    { id: 3, name: 'Birthday Parties', type: 'birthday', budget: 3000, category: 'planning', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80' },
    { id: 4, name: 'Photography', type: 'all', budget: 2000, category: 'photography', image: 'https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070' },
    { id: 5, name: 'Videography', type: 'all', budget: 2500, category: 'videography', image: 'https://images.unsplash.com/photo-1598009139989-b88ef11b7a60?w=800&q=80' },
    { id: 6, name: 'Catering Services', type: 'all', budget: 4000, category: 'catering', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80' },
    { id: 7, name: 'Entertainment', type: 'all', budget: 3000, category: 'entertainment', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80' },
    { id: 8, name: 'Decoration Design', type: 'all', budget: 2500, category: 'decoration', image: 'https://plus.unsplash.com/premium_photo-1661778773089-8718bcedb39e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374' },
    { id: 9, name: 'Venue Booking', type: 'all', budget: 6000, category: 'venue', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80' },
    { id: 10, name: 'Floral Design', type: 'all', budget: 1500, category: 'floral', image: 'https://images.unsplash.com/photo-1534720973641-768c17b2b733?w=800&q=80' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleFavorite = (serviceId) => {
    setFavorites((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleCategory = (category) => {
    setFilterCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredServices = services.filter((service) => {
    const matchesType = filterEventType === 'all' || service.type === filterEventType || service.type === 'all';
    const matchesCategory = filterCategories.length === 0 || filterCategories.includes(service.category);
    return matchesType && matchesCategory;
  });

  return {
    packages,
    testimonials,
    services,
    selectedPackage,
    setSelectedPackage,
    activeTestimonial,
    setActiveTestimonial,
    favorites,
    toggleFavorite,
    filterEventType,
    setFilterEventType,
    filterCategories,
    toggleCategory,
    filteredServices,
    // EXPOSED NEW STATE AND FUNCTIONS
    selectedProviders,
    addProviderToPackage,
    removeProviderFromPackage,
  };
};