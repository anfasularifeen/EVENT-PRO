import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProviderAuth } from '../contexts/ProviderAuthContext';
import { Mail, Lock, Sparkles } from 'lucide-react';

function ProviderLoginPage() {
  const { providerLogin } = useProviderAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (providerLogin(email, password)) {
      navigate('/provider/dashboard');
    } else {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 pt-20">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <div className="flex justify-center">
          <Sparkles className="h-12 w-12 text-emerald-500" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800">Provider Portal Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="you@yourbusiness.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input type="password" id="password" name="password" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="••••••••" />
          </div>
          
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          <p className="text-sm text-gray-500 text-center">(For demo, any email/password works)</p>

          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600">
          Not a provider?{' '}
          <Link to="/register" className="font-semibold text-emerald-600 hover:underline">
            Create a Client Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ProviderLoginPage;