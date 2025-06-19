import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Cody Fisher',
      position: 'CEO, Parkview Int.Ltd',
      image: 'https://thumb.ac-illust.com/4a/4a91fa6c3df8c948accc1a8360d07cff_t.jpeg',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      rating: 5
    },
    {
      id: 2,
      name: 'Robert Fox',
      position: 'CEO, Parkview Int.Ltd',
      image: 'https://thumb.ac-illust.com/4a/4a91fa6c3df8c948accc1a8360d07cff_t.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      rating: 5
    },
    {
      id: 3,
      name: 'Leslie Alexander',
      position: 'CEO, Parkview Int.Ltd',
      image: 'https://thumb.ac-illust.com/4a/4a91fa6c3df8c948accc1a8360d07cff_t.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      rating: 5
    },
    {
      id: 4,
      name: 'Jenny Wilson',
      position: 'CTO, TechGrowth Inc',
      image: 'https://thumb.ac-illust.com/4a/4a91fa6c3df8c948accc1a8360d07cff_t.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      rating: 5
    },
    {
      id: 5,
      name: 'Wade Warren',
      position: 'Marketing Director, Elevate Co',
      image: 'https://thumb.ac-illust.com/4a/4a91fa6c3df8c948accc1a8360d07cff_t.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      rating: 5
    },
    {
      id: 6,
      name: 'Jacob Jones',
      position: 'Product Manager, InnovateTech',
      image: 'https://thumb.ac-illust.com/4a/4a91fa6c3df8c948accc1a8360d07cff_t.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      rating: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Calculate the indexes of testimonials to show (3 at a time)
  const getVisibleTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(testimonials.length / 3);

  // Function to handle dot navigation
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Auto slide change (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, totalPages]);

  // Render star ratings
  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => (
        <svg 
          key={i} 
          className="w-5 h-5 text-yellow-400 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ));
  };

  return (
    <div className="bg-olive-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-3xl font-bold text-olive-700 mr-4">What they say about BOMI</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23ccc'/%3E%3Cpath d='M15,20 Q25,30 35,20 M20,35 Q25,40 30,35' stroke='%23999' fill='none' stroke-width='2'/%3E%3Ccircle cx='18' cy='18' r='2' fill='%23999'/%3E%3Ccircle cx='32' cy='18' r='2' fill='%23999'/%3E%3C/svg%3E";
                  }}
                />
                <div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <h3 className="font-bold text-olive-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-8">
          {Array(totalPages)
            .fill()
            .map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === i ? 'bg-olive-500' : 'bg-olive-200'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;