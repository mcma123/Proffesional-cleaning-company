
import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "The cleaning service was exceptional. They transformed my home into a spotless sanctuary in just a few hours.",
      author: "Sarah Johnson",
      position: "Homeowner",
      image: "https://i.pravatar.cc/150?img=32"
    },
    {
      quote: "As a business owner, I needed a reliable cleaning service for our office space. ProClean exceeded all expectations.",
      author: "Michael Chen",
      position: "CEO, TechStart Inc.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      quote: "Their window cleaning service is incredible. I've never seen my windows so crystal clear before!",
      author: "Emily Rodriguez",
      position: "Property Manager",
      image: "https://i.pravatar.cc/150?img=29"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our <span className="text-gradient">Clients</span> Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about our cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full border-4 border-white overflow-hidden h-16 w-16">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-10">
                <div className="text-5xl text-clean-green-200 font-serif absolute top-8 left-6">"</div>
                <p className="text-gray-600 mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
