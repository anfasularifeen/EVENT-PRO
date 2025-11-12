import { Heart } from 'lucide-react';

function ServiceCard({ service, isFavorite, onToggleFavorite }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
    >
      <div className="relative h-48">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite
                ? 'fill-red-500 text-red-500'
                : 'text-gray-600'
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
        <p className="text-emerald-600 font-semibold">From ${service.budget.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ServiceCard; 