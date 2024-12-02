"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  air,
  car,
  CruiseLine,
  hosp,
  sections,
  WhyChooseUs,
} from "./utilis/data";
import React from "react";
import Link from "next/link";
import Testimonial from "./Components/Testimonial";
import { MdCardTravel, MdFlightTakeoff } from "react-icons/md";
import {
  AirlineImage,
  BannerImage,
  CarRental,
  CruiseImg,
  Hospitality,
  TravelAgency,
} from "./utilis/Images";
import { FaHotel } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { GiCruiser } from "react-icons/gi";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-slate-800 font-[family-name:var(--font-geist-sans)]">
        {/* Full-Width Background Image */}
        <Image
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={BannerImage}
          alt="Banner"
        />

        {/* Content Over the Banner */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-auto min-h-screen px-4 sm:px-20">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl text-[#213b52] font-bold mb-6">
            Welcome to Quantisys
          </h1>

          {/* Subtitle */}
          <p className="text-xl font-bold text-[#213b52]  mb-6">
            Discover powerful tools to streamline your workflow and maximize
            productivity.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="rounded-full bg-[#213b52]  text-background border border-transparent transition-colors flex items-center justify-center gap-2  hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy Now
            </Link>
            <Link
              className="rounded-full bg-[#213b52]  border-white/[.8] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:text-black dark:hover:bg-[#1a1a1a] dark:hover:text-white text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Our Docs
            </Link>
          </div>
        </div>
      </div>

      {/*  About Section Start  */}
      <div className="bg-white overflow-hidden mb-8" id="about">
        <div
          className="container mx-auto px-10 py-8 lg:px-12 lg:py-12"
          data-aos="fade-up"
        >
          <div className="space-y-6" data-aos="zoom-out" data-aos-delay="100">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Quantisys!
              </h2>
              <p className="text-gray-900 mb-4 ">
                Where innovation meets the travel and tourism industry. As a
                forward-thinking company, we specialize in delivering
                cutting-edge B2B services that empower travel businesses to
                thrive in today&apos;s dynamic marketplace. By leveraging
                advanced technology and data-driven insights, we provide
                tailored solutions that enhance operational efficiency and
                elevate customer experiences. <br />
                At Quantisys, we understand the challenges faced by travel
                professionals, from managing customer inquiries to optimizing
                bookings. Our commitment to excellence ensures that every client
                receives personalized support and solutions designed to meet
                their unique needs. With a focus on flexibility and scalability,
                we help businesses adapt to changing trends and maximize their
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Counter section start */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 py-4 lg:py-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            data-aos="fade-up"
            id="counter-section"
          >
            {/* Card 1 */}
            <div className="bg-white text-center rounded-lg p-6">
              <h1
                className="text-6xl text-[#213b52] font-bold mb-4 counter"
                data-count="17"
              >
                17+
              </h1>
              <p className="text-gray-900 text-base sm:text-lg md:text-xl">
                Countries
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-center rounded-lg p-6">
              <h1
                className="text-6xl text-[#213b52] font-bold mb-4 counter"
                data-count="10"
              >
                10+
              </h1>
              <p className="text-gray-900 text-base sm:text-lg md:text-xl">
                Clients
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-center rounded-lg p-6">
              <h1
                className="text-6xl text-[#213b52] font-bold mb-4 counter"
                data-count="50000"
              >
                50k+
              </h1>
              <p className="text-gray-900 text-base sm:text-lg md:text-xl">
                Intelligent Travel
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white text-center rounded-lg p-6">
              <h1
                className="text-6xl text-[#213b52] font-bold mb-4 counter"
                data-count="250000"
              >
                250K+
              </h1>
              <p className="text-gray-900 text-base sm:text-lg md:text-xl">
                Annual Travel Interactions
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* counter section end  */}

      {/* Services start */}

      <div className="relative py-12 mt-10" data-aos="fade-up">
        {/* Background Image */}
        <Image
          src={TravelAgency}
          alt="Travel Agency"
          className="w-full h-[250px] object-cover absolute inset-0 z-0"
          layout="fill"
        />
        {/* Stats Content */}
        <div className="relative z-10 flex items-center justify-center h-[250px] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mt-6" data-aos="fade-up">
          <h2 className="text-3xl text-[#213b52] font-bold mb-4">
            Travel Agency
          </h2>
          <p className="text-lg px-4">
            Efficiently manage the full booking and travel experience with
            intelligent, end-to-end traveler support services to maximize
            satisfaction and drive long-term loyalty.
          </p>
          <Link href="/services#travel" rel="noopener noreferrer">
  <button className="btn text-16 px-6 py-2 mt-6 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
    Learn More
  </button>
</Link>

        </div>

        {/* Dynamic Sections */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          data-aos="fade-up"
        >
          {sections.map((section, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center items-center mb-6">
                <MdCardTravel className="w-20 h-20 text-[#213b52]" />
              </div>
              <p className="text-2xl text-[#213b52] font-semibold mb-4">
                {section.title}
              </p>
              <p className="text-lg px-4">{section.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image with Stats */}

      {/* Airline section start */}
      <div className="relative py-12 mt-10" data-aos="fade-up">
        {/* Background Image */}
        <Image
          src={AirlineImage}
          alt="Travel Agency"
          className="w-full h-[200px] object-cover absolute inset-0 z-0"
          layout="fill"
        />
        {/* Stats Content */}
        <div className="relative z-10 flex items-center justify-center h-[200px] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* <div>
              <h1 className="text-3xl font-bold mb-4 mx-4">
                Latin American Based Online Airlines
              </h1>
            </div>
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold">
                  {stat.value}
                  <span className="text-3xl">{stat.unit}</span>
                </div>
                <p className="text-md">{stat.description}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mt-6" data-aos="fade-up">
          <h2 className="text-3xl text-[#213b52] font-bold mb-4">Airlines</h2>
          <p className="text-lg px-4">
            Despite the many headwinds airlines have had to navigate in recent
            years, growth and prosperity are on the horizon. With the right
            business services partner, they can achieve higher employee
            satisfaction (E-SAT) and customer satisfaction (C-SAT), quickly
            scale to address seasonal needs, realize operational efficiencies,
            and improve revenue. Embrace the journey and see why many of the
            world&apos;s top airlines already trust TP.
          </p>
          <button className="btn text-16 px-6 py-2 mt-6 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
            Learn More
          </button>
        </div>

        {/* Dynamic Airline Sections */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          data-aos="fade-up"
        >
          {air.map((section, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center items-center mb-6">
                <MdFlightTakeoff className="w-20 h-20 text-[#213b52]" />
              </div>
              <p className="text-2xl text-[#213b52] font-semibold mb-4">
                {section.title}
              </p>
              <p className="text-lg px-4">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Airline section end  */}

      {/* Hospitality section start */}

      {/* Background Image with Stats */}
      <div className="relative py-12 mt-10" data-aos="fade-up">
        {/* Background Image */}
        <Image
          src={Hospitality}
          alt="Travel Agency"
          className="w-full h-[275px] object-cover absolute inset-0 z-0"
          layout="fill"
        />
        {/* Stats Content */}
        <div className="relative z-10 flex items-center justify-center h-[275px] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          </div>
        </div>
      </div>
      {/* Title start */}
      <div className="container mx-auto px-4">
        <div className="text-center mt-6" data-aos="fade-up">
          <h2 className="text-3xl text-[#213b52] font-bold mb-4">
            Hospitality
          </h2>
          <p className="text-lg px-4">
            Optimize the guest experience with integrated reservation management
            and on-site support via the channels they prefer.
          </p>

          <button className="btn text-[16px] px-6 py-2 mt-6 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
            Learn More
          </button>
        </div>

        {/* Dynamic Sections */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          data-aos="fade-up"
        >
          {hosp.map((section, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center items-center mb-6">
                <FaHotel className="w-20 h-20 text-[#213b52]" />
              </div>
              <p className="text-2xl text-[#213b52] font-semibold mb-4">
                {section.title}
              </p>
              <p className="text-lg px-4">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* hospitality section end  */}

      {/* Car Rental Start */}

      {/* Background Image with Stats */}
      <div className="relative py-12 mt-10" data-aos="fade-up">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src={CarRental}
      alt="Travel Agency"
      layout="fill"
      className="w-full h-[250px] object-cover absolute inset-0 z-0"
      priority={true}
    />
  </div>

  {/* Stats Content */}
  <div className="relative z-10 flex items-center justify-center h-[250px] text-white">
    <div className="text-center">
      {/* Add your stats content here */}
    </div>
  </div>
</div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mt-6" data-aos="fade-up">
          <h2 className="text-3xl text-[#213b52] font-bold mb-4">Car Rental</h2>
          <p className="text-lg px-4">
            Streamline the rental experience through automated tools and a
            digital-first approach that will create companywide efficiencies.
          </p>
          <button className="text-[16px] px-6 py-2 mt-6 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
            Learn More
          </button>
        </div>

        {/* Dynamic Sections */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          data-aos="fade-up"
        >
          {car.map((section, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center items-center mb-6">
                <FaCarAlt className="w-20 h-20 text-[#213b52]" />
              </div>
              <p className="text-2xl text-[#213b52] font-semibold mb-4">
                {section.title}
              </p>
              <p className="text-lg px-4">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Car Rental end  */}

      {/* Cruise line start*/}

      {/* Background Image with Stats */}
      <div className="relative py-12 mt-10" data-aos="fade-up">
        {/* Background Image */}
        <Image
          src={CruiseImg}
          alt="Travel Agency"
          className="w-full h-[250px] absolute inset-0 z-0"
          layout="fill"
        />
        {/* Stats Content */}
        <div className="relative z-10 flex items-center justify-center h-[250px] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"></div>
        </div>
      </div>

      {/* Title start */}
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mt-6" data-aos="fade-up">
          <h2 className="text-3xl text-[#213b52] font-bold mb-4">
            Cruise Lines{" "}
          </h2>
          <p className="text-lg px-4">
            Accelerate recovery by maximizing bookings and upsell conversions,
            while also maximizing operational efficiencies with an intelligent,
            digital-first approach including process automation.
          </p>
          <button className="btn text-16 px-6 py-2 mt-6 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
            Learn More
          </button>
        </div>

        {/* Dynamic Sections */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          data-aos="fade-up"
        >
          {CruiseLine.map((section, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center items-center mb-6">
                <GiCruiser className="w-20 h-20 text-[#213b52]" />
              </div>
              <p className="text-2xl text-[#213b52] font-semibold mb-4">
                {section.title}
              </p>
              <p className="text-lg px-4">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Cruise line end */}

      {/* services end */}

      {/* why choose us section start */}
      <section id="featured-services" className="why-choose-us py-16 bg-white">
        {/* Section Title */}
        <div
          className="container mx-auto text-center mb-12 px-4 sm:px-6"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-3xl text-[#213b52] font-bold mb-4">
            Why Choose Us
          </h2>
          <h5 className="text-base sm:text-xl text-gray-900">
            Outsourcing Your Travel Business Processes?
          </h5>
        </div>

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Dynamically render each service item */}
            {WhyChooseUs.map((service, index) => (
              <div
                key={service.id}
                className="service-item bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={`${200 + index * 100}`} // dynamically set delay based on index
              >
                {/* Image */}
                <div className="img">
                  <Image
                    src={service.imgSrc}
                    className="w-full h-48 object-cover"
                    alt={service.title}
                  />
                </div>

                {/* Details */}
                <div className="details p-6">
                  {/* Icon */}
                  <div className="icon text-indigo-600 mb-4">
                    {React.createElement(service.icon, {
                      className: "text-4xl text-indigo-600",
                    })}
                  </div>

                  {/* Title */}
                  <Link href={service.link} className="stretched-link">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#213b52]">
                      {service.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Contact /> */}

      {/* why choose us section end */}
      <Testimonial />
    </>
  );
}
