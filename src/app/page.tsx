"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { WhyChooseUs } from "./utilis/data";
import React from "react";
import Link from "next/link";
import Services from "./services/page";
import Testimonial from "./Components/Testimonial";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center bg-slate-800 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={800}
            height={400}
          />

          {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </Link>
            <Link
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </Link>
          </div>
        </main>
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

      {/* Services start */}

      <Services />

      {/* services end */}

      {/* Counter section start */}
      <div className="py-24 bg-white">
        <div className="max-w-screen-xl px-6 lg:px-12 py-8 lg:py-12">
          <h2
            className="text-center text-3xl font-bold text-[#213b52] mb-2"
            data-aos="fade-up"
          >
            Deep Industry Experience
          </h2>
          <p
            className="text-xl text-gray-900 text-center mb-16"
            data-aos="fade-up"
          >
            Put our global expertise to work for your business
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            <div className="bg-white text-center">
              <div className="details p-4">
                <h1 className="text-8xl text-[#213b52] font-bold mb-2">
                  <span className="counter">17</span>+
                </h1>
                <p className="text-gray-900 text-xl">Countries</p>
              </div>
            </div>
            <div className="bg-white text-center">
              <div className="details p-4">
                <h1 className="text-8xl text-[#213b52] font-bold mb-2">
                  <span className="counter">10</span>+
                </h1>
                <p className="text-gray-900 text-xl">Clients</p>
              </div>
            </div>
            <div className="bg-white text-center">
              <div className="details p-4">
                <h1 className="text-8xl text-[#213b52] font-bold mb-2">
                  <span className="counter">50K</span>+
                </h1>
                <p className="text-gray-900 text-xl">Intelligent Travel</p>
              </div>
            </div>
            <div className="bg-white text-center">
              <div className="details p-4">
                <h1 className="text-8xl text-[#213b52] font-bold mb-2">
                  <span className="counter">250K+</span>
                </h1>
                <p className="text-gray-900 text-xl">
                  Annual Travel Interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter section end */}

      {/* why choose us section start */}
      <section id="featured-services" className="why-choose-us py-16 bg-white">
        {/* Section Title */}
        <div className="container mx-auto text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl text-[#213b52] font-bold  mb-4">
            Why Choose Us
          </h2>
          <h5 className=" text-gray-900 text-2xl">
            Outsourcing Your Travel Business Processes?
          </h5>
        </div>

        <div
          className="container mx-auto px-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Dynamically render each service item */}
            {WhyChooseUs.map((service, index) => (
              <div
                key={service.id}
                className="service-item bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={`${200 + index * 100}`} // dynamically set delay based on index
              >
                <div className="img">
                  <Image
                    src={service.imgSrc}
                    className="w-full h-48 object-cover"
                    alt={service.title}
                  />
                </div>
                <div className="details p-6 relative">
                  <div className="icon text-4xl text-indigo-600 mb-4">
                    {React.createElement(service.icon, {
                      className: "text-4xl text-indigo-600",
                    })}
                  </div>
                  <Link href={service.link} className="stretched-link">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Contact /> */}

      {/* why choose us section end */}
      <Testimonial/>
    </>
  );
}
