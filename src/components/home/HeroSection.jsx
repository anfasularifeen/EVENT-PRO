import { Link } from 'react-router-dom'; // Import Link

function HeroSection() {
  // We no longer need the scrollToPackages function

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Create Unforgettable Events
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          From intimate gatherings to grand celebrations, we bring your vision to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Replace button with Link, styled the same way */}
          <Link
            to="/packages"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Explore Packages
          </Link>
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;