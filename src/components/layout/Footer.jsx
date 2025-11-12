import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">EventPlanner Pro</span>
            </div>
            <p className="text-gray-400">
              Creating unforgettable experiences, one event at a time.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white">Wedding Planning</Link></li>
              <li><Link to="/services" className="hover:text-white">Corporate Events</Link></li>
              <li><Link to="/services" className="hover:text-white">Birthday Parties</Link></li>
              <li><Link to="/services" className="hover:text-white">Custom Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              {/* 2. Add Provider Portal Link */}
              <li>
                <Link to="/provider/login" className="font-semibold hover:text-white">
                  Provider Portal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@eventplannerpro.com</li>
              <li>(555) 123-4567</li>
              <li>123 Event Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EventPlanner Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;