import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdFlightTakeoff } from 'react-icons/md'
import { GiCruiser } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { AirlineImage,  TravelAgency,Hospitality, CarRental,CruiseImg   } from '../utilis/Images'

const Services = () => {
  return (
<>
  <div className="bg-white overflow-hidden" id="services">
  <div className="container mx-auto text-center px-2 py-8 lg:px-12 mb-8 mt-8" data-aos="fade-up">
    <h2 className="text-3xl text-[#213b52] font-bold mb-4">Our Services</h2>
    <h5 className="text-gray-900 text-2xl">Travel business process outsourcing services</h5>
  </div>
  
{/* online travel agency start*/}

<div className="container mx-auto px-10" data-aos="fade-up">
  <div className="row flex justify-center">

    <div className="col-lg-10 px-4">
   
      <div className="text-center mt-6 h-12 sm:h-3 md:h-7 lg:h-10 xl:h-15 " data-aos="fade-up">
        <h2 className="text-3xl text-[#213b52] font-bold mb-10"> Travel Agency</h2>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg px-4">
        Efficiently manage the full booking and travel experience with intelligent, end-to-end traveler support services to maximize satisfaction and drive long-term loyalty.
        </p>
      </div> 

     
      <div className="text-center mt-6 ">
  <button className="btn text-16 px-6 py-2 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
    Learn More
  </button>
</div>

    </div>

  </div>
</div>
<div className="container mx-auto" data-aos="fade-up">
  <div className="flex justify-center">
    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>


      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      <MdCardTravel className="w-20 h-20 text-[#213b52]" />
</div>

        <p className="text-2xl text-[#213b52] font-semibold">
        Make client setup, bookings, and trip management simple and intuitive</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
        Deliver world-class sales and bookings support for groups of any size. Keep clients coming back with easy-to-use client tools, integrated support channels, and premium concierge services.
        </p>
      </div>
    </div>

    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>
      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      <MdCardTravel className="w-20 h-20 text-[#213b52]" />
</div>

        <p className="text-2xl text-[#213b52]  font-semibold">Integrate back-office functions to streamline fulfillment, ticketing, and more</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
        Integrate critical front-and-back-office functions to ensure consistent, high-quality customer engagement across all touchpoints and throughout the trip management process.
        </p>
      </div>
    </div>

  </div>
</div>
</div>
{/* online travel agency end */}

{/* Airline section service start */}
{/* image*/}
<div className=" py-12" data-aos="fade-up" >
  <div className="relative">
    {/* Image as Background */}
    <Image
      src={TravelAgency}
      alt="flight"
      className="w-full h-[300px] object-cover absolute inset-0 z-0"
    />

    {/* Content Over Image */}
    <div className="relative z-10 flex items-center justify-center h-[300px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-4 mx-10 ">Latin American Based Online Travel Agency</h1>
        </div>

        {/* Middle Section */}
        <div className="text-white gap-4  ">
          <div>
            <label className="text-4xl font-bold">40</label>
            <span className="text-3xl">%</span>
          </div>
          <p className="text-md">Reduction in agency debit memos (ADM)</p>
        </div>

        {/* Right Section */}
        <div className="text-white gap-4">
          <div>
            <label className="text-4xl font-bold">30</label>
            <span className="text-3xl">%</span>
          </div>
          <p className="text-md">Decrease in average handle time (AHT)</p>
        </div>
      </div>
    </div>
  </div>

{/* online travel agency end  */}
<div className="container mx-auto px-10" data-aos="fade-up">
  <div className="row flex justify-center">

    <div className="col-lg-10 px-4">
   
      <div className="text-center mt-6 h-12 sm:h-3 md:h-7 lg:h-10 xl:h-15 " data-aos="fade-up">
        <h2 className="text-3xl text-[#213b52] font-bold mb-10">Airlines</h2>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg px-4">
          Despite the many headwinds airlines have had to navigate in recent years, growth and prosperity are on the horizon. 
          With the right business services partner, they can achieve higher employee satisfaction (E-SAT) and customer satisfaction (C-SAT),
          quickly scale to address seasonal needs, realize operational efficiencies, and improve revenue.
          Embrace the journey and see why many of the world&apos;s top airlines already trust TP.
        </p>
      </div> 

     
      <div className="text-center mt-6 ">
  <button className="btn text-16 px-6 py-2 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
    Learn More
  </button>
</div>

    </div>

  </div>
</div>

<div className="container mx-auto" data-aos="fade-up">
  <div className="flex justify-center">


    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>
      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
  <MdFlightTakeoff className="w-20 h-20 text-[#213b52]" />
</div>

        <p className="text-2xl text-[#213b52] font-semibold">Leverage our deep industry knowledge</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
          At TP, we understand that airlines are facing high volumes, an elevated cost-to-serve, seasonal spikes, challenges with passenger support, 
          and operational inefficiencies. Learn more about our proven, industry-specific tools and best practices.
        </p>
      </div>
    </div>

   
    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>

      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      <MdFlightTakeoff 
      className="w-20 h-20 text-[#213b52]" />
</div>

        <p className="text-2xl text-[#213b52]  font-semibold">Create companywide operational efficiencies</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
          Eliminate counterproductive silos by digitally integrating the front, middle, and back-office functions. 
          Streamline end-to-end business operations and connect the entire customer journey to ensure consistent experiences across all touchpoints.
        </p>
      </div>
    </div>

  </div>
</div>
</div>
{/* image*/}
<div className=" py-12" data-aos="fade-up">  <div className="relative">
    {/* Image as Background */}
    <Image
      src={AirlineImage}
      alt="flight"
      className="w-full h-[300px] object-cover absolute inset-0 z-0"
    />

    {/* Content Over Image */}
    <div className="relative z-10 flex items-center justify-center h-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-4 px-8">USA Based Carrier</h1>
        </div>

        {/* Middle Section */}
        <div className="text-white gap-4  ">
          <div>
            <label className="text-4xl font-bold">50</label>
            <span className="text-3xl">%</span>
          </div>
          <p className="text-md">Reduction in agency debit memos (ADM)</p>
        </div>

        {/* Right Section */}
        <div className="text-white gap-4">
          <div>
            <label className="text-4xl font-bold">30</label>
            <span className="text-3xl">%</span>
          </div>
          <p className="text-md">Decrease in average handle time (AHT)</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Airline service end*/}

{/* Hospitality  Service start*/}

<div className="container mx-auto px-10" data-aos="fade-up">
  <div className="row flex justify-center">

    <div className="col-lg-10 px-4">
   
      <div className="text-center mt-6 h-12 sm:h-3 md:h-7 lg:h-10 xl:h-15 " data-aos="fade-up">
        <h2 className="text-3xl text-[#213b52] font-bold mb-10">Hospitality</h2>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg px-4">
        Optimize the guest experience with integrated reservation management and on-site support via the channels they prefer.        </p>
      </div> 

      <div className="text-center mt-6 ">
  <button className="btn text-16 px-6 py-2 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
    Learn More
  </button>
</div>

    </div>

  </div>
</div>
<div className="container mx-auto" data-aos="fade-up">
  <div className="flex justify-center">
    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>
      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      < FaHotel  className="w-20 h-20 text-[#213b52]" />
</div>
        <p className="text-2xl text-[#213b52] font-semibold"> Seamless reservations elevate bookings</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
        Streamline reservation management with intuitive self-service tools and integrated support options that increase satisfaction while reducing operating costs.        </p>
      </div>
    </div>

    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>
      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      < FaHotel className="w-20 h-20 text-[#213b52]" />
</div>

        <p className="text-2xl text-[#213b52]  font-semibold">Keep guests coming back with world-class service</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
        Use integrated, digital-first tools to keep guests close and connected during their stay. Then, help them plan return visits with upsell and cross-sell offers and options.
        </p>
      </div>
    </div>

  </div>
</div>
<div className=" py-12" data-aos="fade-up">
  <div className="relative">
    {/* Image as Background */}
    <Image
      src={Hospitality}
      alt="flight"
      className="w-full h-[300px] object-cover absolute inset-0 z-0"
    />
    {/* Content Over Image */}
    <div className="relative z-10 flex items-center justify-center h-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-4 px-10">A US Based Hospital Chain</h1>
        </div>

        {/* Middle Section */}
        <div className="text-white gap-4  ">
          <div>
            <label className="text-4xl font-bold">50</label>
            <span className="text-3xl">%</span>
          </div>
          <p className="text-md">Reduction in agency debit memos (ADM)</p>
        </div>

        {/* Right Section */}
        <div className="text-white gap-4">
          <div>
            <label className="text-4xl font-bold">30</label>
            <span className="text-3xl">%</span>
          </div>
          <p className="text-md">Decrease in average handle time (AHT)</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Hospitality service end  */}

{/* Car Rental start*/}

<div className="container mx-auto px-10" data-aos="fade-up">
  <div className="row flex justify-center">

    <div className="col-lg-10 px-4">
   
      <div className="text-center mt-6 h-12 sm:h-3 md:h-7 lg:h-10 xl:h-15 " data-aos="fade-up">
        <h2 className="text-3xl text-[#213b52] font-bold mb-10">Car Rental</h2>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg px-4">
        Streamline the rental experience through automated tools and a digital-first approach that will create companywide efficiencies. </p>
        </div> 

      <div className="text-center mt-6 ">
  <button className="btn text-16 px-6 py-2 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
    Learn More
  </button>
</div>
    </div>
  </div>
</div>

<div className="container mx-auto" data-aos="fade-up">
  <div className="flex justify-center">
    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>
      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      <FaCarAlt className="w-20 h-20 text-[#213b52]" />
</div>
        <p className="text-2xl text-[#213b52] font-semibold"> Empower travelers through intuitive, self-service tools and integrated customer support options</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
        Deliver a frictionless travel experience with easy-to-use booking and support tools, and increase upsell conversions with intelligent offers via each customer&props;s preferred channels.</p>
        </div>
    </div>

    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>
      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      <FaCarAlt className="w-20 h-20 text-[#213b52]" />
</div>

        <p className="text-2xl text-[#213b52]  font-semibold">Eliminate back-office silos to maximize business-wide efficiencies</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
        By integrating critical front-and-back office functions and applying proven Lean Six Sigma methodologies, companies can drive end-to-end efficiencies through process automation and operational disciplines.
        </p>
      </div>
    </div>
  </div>
</div>
<div className=" py-12" data-aos="fade-up">
  <div className="relative">
    {/* Image as Background */}
    <Image
      src={CarRental}
      alt="flight"
      className="w-full h-[300px] object-cover absolute inset-0 z-0"
    />

    {/* Content Over Image */}
    <div className="relative z-10 flex items-center justify-center h-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
      </div>
    </div>
  </div>
</div>
{/* Car rental end */}

{/* Cruise line start */}

<div className="container mx-auto px-10" data-aos="fade-up">
  <div className="row flex justify-center">

    <div className="col-lg-10 px-4">
   
      <div className="text-center mt-6 h-12 sm:h-3 md:h-7 lg:h-10 xl:h-15 " data-aos="fade-up">
        <h2 className="text-3xl text-[#213b52] font-bold mb-10"> Cruise Lines</h2>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg px-4">
        Accelerate recovery by maximizing bookings and upsell conversions, while also maximizing operational efficiencies with an intelligent, digital-first approach including process automation.        </p>
      </div>  
      <div className="text-center mt-6 ">
  <button className="btn text-16 px-6 py-2 bg-[#213b52] text-white rounded-lg hover:bg-sky-400 transition">
    Learn More
  </button>
</div>
    </div>
  </div>
</div>

<div className="container mx-auto" data-aos="fade-up">
  <div className="flex justify-center">
    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>
      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      <GiCruiser className="w-20 h-20 text-[#213b52]" />
</div>

        <p className="text-2xl text-[#213b52] font-semibold">  Deliver a seamless experience from booking to debarkation </p>
     </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
        Simplify the reservation management process with <br/> simple, self-service options, offer easy-to-add upgrades and excursions,<br />and maintain close contact with travelers while on-board.
        </p>
      </div>
    </div>
    <div className="col-lg-4 px-4">
      <div className="geral-responsiveImage p-0 aos-init aos-animate" data-editor="responsiveImage" data-aos="slide-up">
        <div className="row mx-auto w-full">
          <div className="col my-auto p-0 text-center"></div>
        </div>
      </div>
      <div className="text-center mt-6">
      <div className="flex justify-center items-center">
      <GiCruiser className="w-20 h-20 text-[#213b52]" />
</div>
        <p className="text-2xl text-[#213b52]  font-semibold">Increase upsell conversions</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg px-10">
        Increase up-sell conversions with predictive modeling and integrated, cross-channel promotions.
        </p>
      </div>
    </div>
  </div>
</div>
<div className=" py-12" data-aos="fade-up">
  <div className="relative">
    {/* Image as Background */}
    <Image
      src={CruiseImg}
      alt="flight"
      className="w-full h-[300px] object-cover absolute inset-0 z-0"
    />

    {/* Content Over Image */}
    <div className="relative z-10 flex items-center justify-center h-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold text-white text-start mb-4 pl-14 ">A Leading US Based Cruise Line</h1>
        </div>

        {/* Middle Section */}
        <div className="text-white gap-4  ">
          <div>
            <label className="text-4xl font-bold">50</label>
            <span className="text-3xl">%</span>
          </div>
          <p className="text-md">Reduction in agency debit memos (ADM)</p>
        </div>

        {/* Right Section */}
        <div className="text-white gap-4">
          <div>
            <label className="text-4xl font-bold">30</label>
            <span className="text-3xl">%</span>
          </div>
          <p className="text-md">Decrease in average handle time (AHT)</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Cruise line end */}

    {/* services end */}
    </>
  )
}

export default Services