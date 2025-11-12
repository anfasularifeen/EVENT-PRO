import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock } from 'lucide-react';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Login failed. (Hint: fadi@client.com)');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 pt-20">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Client Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ... (form fields are the same) ... */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="fadi@client.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input type="password" id="password" name="password" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="••••••••" />
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Sign In
          </button>
        </form>
        
        <p className="text-center text-gray-600">
          New client?{' '}
          <Link to="/register" className="font-semibold text-emerald-600 hover:underline">
            Sign up here
          </Link>
        </p>
        <p className="text-center text-gray-600 border-t pt-4">
          Are you a provider?{' '}
          <Link to="/provider/login" className="font-semibold text-emerald-600 hover:underline">
            Provider Portal Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;