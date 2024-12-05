"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { AboutImg, MissionImg, AboutBanner, VisionImg } from "@/app/utilis/Images";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gray-900 mb-8 h-60 w-full">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">About Us</h2>
          </div>

          <div className="absolute inset-0 opacity-40">
            <Image
              src={AboutBanner}
              alt="About Banner"
              layout="fill"
              objectFit="cover"
              className="bg-white"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white" id="about">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Text Section */}
              <div className="space-y-4 md:space-y-6" data-aos="zoom-out" data-aos-delay="100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#213b52]">
                  Welcome to Quantisys!
                  <span className="block w-12 h-1 bg-gray-700 mt-2"></span>
                </h2>
                <p className="text-gray-900">
                  Welcome to Quantisys, where innovation meets the travel and tourism industry.
                  We specialize in delivering cutting-edge B2B services that empower travel
                  businesses to thrive in today&apos;s dynamic marketplace.
                </p>
              </div>
              {/* Image Section */}
              <div className="flex justify-center items-center" data-aos="zoom-out" data-aos-delay="100">
                <Image
                  src={AboutImg}
                  alt="About Quantisys"
                  className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white py-8">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { count: 4, label: "Global Presence" },
                { count: 5, label: "Continents" },
                { count: 12, label: "Countries" },
                { count: 17, label: "Delivery Centers" },
                { count: 200, label: "Clients" },
                { count: 20, label: "Employees" },
              ].map((item, index) => (
                <div key={index} className="text-center bg-white p-4">
                  <h1 className="text-3xl sm:text-4xl text-[#213b52] font-bold mb-2">{item.count}</h1>
                  <p className="text-gray-900 text-sm sm:text-base">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 bg-white" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div
                className="flex justify-center items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <Image
                  src={MissionImg}
                  alt="Our Mission"
                  className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 md:space-y-6" data-aos="zoom-out" data-aos-delay="100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#213b52]">
                  Our Mission!
                  <span className="block w-12 h-1 bg-gray-700 mt-2"></span>
                </h2>
                <p className="text-gray-900">
                  At Quantisys, we understand the challenges faced by travel professionals, from
                  managing customer inquiries to optimizing bookings. Our commitment to excellence
                  ensures personalized support and solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 bg-white" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4 md:space-y-6" data-aos="zoom-out" data-aos-delay="100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#213b52]">
                  Our Vision!
                  <span className="block w-12 h-1 bg-gray-700 mt-2"></span>
                </h2>
                <p className="text-gray-900">
                  We are committed to transforming the travel and tourism industry through
                  innovative B2B services, empowering businesses with advanced solutions for
                  sustainable growth.
                </p>
              </div>
              <div
                className="flex justify-center items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <Image
                  src={VisionImg}
                  alt="Our Vision"
                  className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
