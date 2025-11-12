import { CheckCircle, Shield, Calendar } from 'lucide-react';

function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Seamless Planning</h3>
            <p className="text-gray-600">
              From concept to execution, we handle every detail with precision and care
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <Shield className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Trusted Partners</h3>
            <p className="text-gray-600">
              Work with vetted vendors and venues to ensure quality service every time
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <Calendar className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Book your perfect date with our intuitive scheduling system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;