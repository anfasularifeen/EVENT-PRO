function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to your perfect event
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-emerald-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mb-4">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Choose Your Package</h3>
            <p className="text-gray-600">
              Select from our curated packages or create a custom solution
            </p>
          </div>
          <div className="hidden md:block flex-1 border-t-4 border-emerald-500 mt-10 mx-4"></div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-emerald-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mb-4">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Plan Together</h3>
            <p className="text-gray-600">
              Work with our expert team to refine every detail
            </p>
          </div>
          <div className="hidden md:block flex-1 border-t-4 border-emerald-500 mt-10 mx-4"></div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-emerald-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mb-4">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Celebrate</h3>
            <p className="text-gray-600">
              Enjoy your flawlessly executed event while we handle everything
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;