import PackageCard from './PackageCard'; // Import the new, separate card component

function PackagesSection({ packages }) {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-gray-600">
            Tailored solutions for every event size and budget
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;