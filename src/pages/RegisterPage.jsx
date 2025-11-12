import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, User } from 'lucide-react';

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    
    register(name, email); // Simple client register
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 pt-20">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create Your Client Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><User className="h-5 w-5 text-gray-400" /></span>
              <input type="text" id="name" name="name" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="John Doe" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><Mail className="h-5 w-5 text-gray-400" /></span>
              <input type="email" id="email" name="email" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><Lock className="h-5 w-5 text-gray-400" /></span>
              <input type="password" id="password" name="password" required className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg" placeholder="Create a strong password" />
            </div>
          </div>
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Create Account
          </button>
        </form>
        
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-emerald-600 hover:underline">
            Sign in
          </Link>
        </p>
        <p className="text-center text-gray-600 border-t pt-4">
          Want to offer services?{' '}
          <Link to="/provider/register" className="font-semibold text-emerald-600 hover:underline">
            Sign up as a Provider
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;