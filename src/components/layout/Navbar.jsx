import { Sparkles, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Use CLIENT auth

function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const { user } = useAuth(); // Get the CLIENT user

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Sparkles className="h-8 w-8 text-emerald-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">EventPlanner Pro</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-500 transition">Home</Link>
            <Link to="/packages" className="text-gray-700 hover:text-emerald-500 transition">Packages</Link>
            <Link to="/services" className="text-gray-700 hover:text-emerald-500 transition">Services</Link>

            {user ? (
              <Link
                to="/dashboard"
                className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                <User className="h-4 w-4 mr-2" />
                My Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                Login
              </Link>
            )}
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 rounded" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/packages" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 rounded" onClick={() => setMobileMenuOpen(false)}>Packages</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 rounded" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            
            {user ? (
              <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                My Dashboard
              </Link>
            ) : (
              <Link to="/login" className="block px-3 py-2 text-emerald-600 font-semibold hover:bg-emerald-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;