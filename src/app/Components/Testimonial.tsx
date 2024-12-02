import React from "react";
import { testimonialData } from "../utilis/data";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

const Testimonial = () => {
  const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalf key="half-star" className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-2 py-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8"  data-aos= "fade-up">
          <h3 className="text-3xl  text-[#213b52] font-semibold mb-4">Testimonials</h3>
          <p className="text-2xl text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
            numquam iure provident voluptate esse quasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"  data-aos= "fade-up">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-full shadow-lg transition-all duration-400 hover:scale-110"
                  width="150"
                  height="150"
                />
              </div>
              <h5 className="text-lg font-medium mb-2">{testimonial.name}</h5>
              <h6 className="text-primary-500 text-blue-500 mb-3">
                {testimonial.role}
              </h6>
              <p className="text-gray-700 italic mb-4">
                <i className="fas fa-quote-left pr-2"></i>
                {testimonial.quote}
              </p>
              <div className="flex justify-center space-x-1">
                {getStars(testimonial.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
