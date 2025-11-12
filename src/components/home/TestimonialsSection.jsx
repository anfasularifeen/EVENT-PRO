import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

function TestimonialsSection({ testimonials, activeTestimonial, setActiveTestimonial }) {
  
  const handlePrev = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  
  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real celebrations
          </p>
        </div>
        <div className="relative">
          <div className="bg-gray-50 rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-gray-700 text-center mb-6 italic">
              "{currentTestimonial.text}"
            </p>
            <div className="text-center">
              <p className="font-bold text-gray-800 text-lg">
                {currentTestimonial.name}
              </p>
              <p className="text-emerald-600">{currentTestimonial.role}</p>
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === activeTestimonial ? 'bg-emerald-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;