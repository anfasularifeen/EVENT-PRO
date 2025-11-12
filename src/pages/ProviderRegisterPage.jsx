import { Link, useNavigate } from 'react-router-dom';
import { useProviderAuth } from '../contexts/ProviderAuthContext';
import { User, Type, Image, FileText, MapPin, DollarSign } from 'lucide-react'; // Import DollarSign

function ProviderRegisterPage() {
  const { providerRegister } = useProviderAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      type: formData.get('type'), // Service Category (e.g., Photography)
      price: Number(formData.get('price')), // NEW: Minimum price offered by the provider
      photo: formData.get('photo'),
      description: formData.get('description'),
      place: {
        city: formData.get('city'),
        district: formData.get('district'),
        state: formData.get('state'),
        pin: formData.get('pin')
      }
    };

    if (providerRegister(data)) {
      navigate('/provider/dashboard');
    }
  };

  // Expanded list of service types based on discussion
  const serviceTypes = [
      'planning', 'venue', 'catering', 'photography', 
      'videography', 'entertainment', 'decoration', 'floral'
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 pt-24">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Become a Provider</h2>
        <p className="text-center text-gray-600">Join our network and grow your event business.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Provider Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Provider Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"><User className="h-5 w-5 text-gray-400" /></span>
                <input type="text" id="name" name="name" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="e.g., Lens & Life Studios" />
              </div>
            </div>

            {/* Provider Type (Category) */}
            <div>
              <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">Service Category</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"><Type className="h-5 w-5 text-gray-400" /></span>
                <select id="type" name="type" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg capitalize">
                  <option value="">Select your service</option>
                  {serviceTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Contact Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><User className="h-5 w-5 text-gray-400" /></span>
              <input type="email" id="email" name="email" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="you@yourbusiness.com" />
            </div>
          </div>
          
          {/* NEW: Minimum Service Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">Minimum Service Price (USD)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><DollarSign className="h-5 w-5 text-gray-400" /></span>
              <input type="number" id="price" name="price" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="e.g., 800" min="0" step="10" />
            </div>
            <p className="text-xs text-gray-500 mt-1">This price determines your package tier (Starter, Premium, Luxury).</p>
          </div>

          {/* Photo URL */}
          <div>
            <label htmlFor="photo" className="block text-sm font-semibold text-gray-700 mb-2">Profile Photo (Link)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><Image className="h-5 w-5 text-gray-400" /></span>
              <input type="url" id="photo" name="photo" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="https://... (using URL for demo)" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <div className="relative">
              <span className="absolute top-4 left-0 flex items-center pl-3"><FileText className="h-5 w-5 text-gray-400" /></span>
              <textarea id="description" name="description" rows="3" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="Tell clients about your service..."></textarea>
            </div>
          </div>

          {/* Place Fields (no change) */}
          <fieldset className="border p-4 rounded-lg">
            <legend className="text-lg font-semibold text-gray-800 px-2">Your Location</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                <input type="text" id="city" name="city" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="New York" />
              </div>
              <div>
                <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">District / Area</label>
                <input type="text" id="district" name="district" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Manhattan" />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">State / Region</label>
                <input type="text" id="state" name="state" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="NY" />
              </div>
              <div>
                <label htmlFor="pin" className="block text-sm font-semibold text-gray-700 mb-2">Pincode / Zip</label>
                <input type="text" id="pin" name="pin" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="10001" />
              </div>
            </div>
          </fieldset>

          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Create Provider Account
          </button>
        </form>
        
        <p className="text-center text-gray-600">
          Already a provider?{' '}
          <Link to="/provider/login" className="font-semibold text-emerald-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ProviderRegisterPage;