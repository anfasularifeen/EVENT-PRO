import { Check } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

function PackageCard({ pkg }) {
  // Determine the URL based on the package name (e.g., /packages/starter)
  const packageSlug = pkg.name.toLowerCase();

  return (
    <div
      className={`relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition ${
        pkg.popular ? 'ring-4 ring-emerald-500' : ''
      }`}
    >
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
        <p className="text-5xl font-bold text-emerald-500 mb-6">{pkg.price}</p>
        <ul className="space-y-4 mb-8">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        {/* Changed logic to use Link and updated button text */}
        <Link
          to={`/packages/${packageSlug}`}
          className="w-full py-3 rounded-lg font-semibold transition text-center inline-block
          bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          Book Package
        </Link>
      </div>
    </div>
  );
}

export default PackageCard;