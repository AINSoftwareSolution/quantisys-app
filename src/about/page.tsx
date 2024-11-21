
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AboutImg, MissionImg } from '@/app/utilis/Images';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* About Section Start */}
      <div className=" overflow-hidden">
      <div className="bg-[#213b52] overflow-hidden mb-8">
        <div className="container mx-auto px-2 py-8 lg:px-12 lg:py-4" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div
              className="flex justify-center items-center transition-transform transform hover:scale-105"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <Image
                src={AboutImg}
                alt="About Quantisys"
                className="w-full h-auto object-cover object-center rounded-lg"
              />
            </div>
            {/* Text Section */}
            <div className="space-y-6" data-aos="zoom-out" data-aos-delay="100">
              <h2 className="text-3xl font-bold text-white mb-4">
                Welcome to Quantisys!
                <span className="block w-12 h-1 bg-gray-700 dark:bg-gray-300 mt-2"></span>
              </h2>
              <p className="text-white mb-4">
                Welcome to Quantisys, where innovation meets the travel and tourism industry. We specialize
                in delivering cutting-edge B2B services that empower travel businesses to thrive in today&apos;s
                dynamic marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}

      {/* Mission Section */}
      <div className="bg-white overflow-hidden mb-8">
        <div className="container mx-auto px-2 py-8 lg:px-12 lg:py-4" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-6" data-aos="zoom-out" data-aos-delay="100">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Mission!
                <span className="block w-12 h-1 bg-gray-700 dark:bg-gray-300 mt-2"></span>
              </h2>
              <p className="text-black mb-4">
                At Quantisys, we are committed to transforming the travel and tourism industry.
              </p>
            </div>
            <div
              className="flex justify-center items-center transition-transform transform hover:scale-105"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <Image
                src={MissionImg}
                alt="Our Mission"
                className="w-full h-auto object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-[#213b52] overflow-hidden">
        <div className="container mx-auto px-2 py-8 lg:px-12 lg:py-4" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              className="flex justify-center items-center transition-transform transform hover:scale-105"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <Image
                src={AboutImg}
                alt="Our Vision"
                className="w-full h-auto object-cover object-center rounded-lg"
              />
            </div>
            <div className="space-y-6" data-aos="zoom-out" data-aos-delay="100">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Vision!
                <span className="block w-12 h-1 bg-gray-700 dark:bg-gray-300 mt-2"></span>
              </h2>
              <p className="text-white mb-4">
                Our vision is to lead in transforming the travel and tourism industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}; 

export default About;
