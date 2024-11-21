import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { ContactImage } from "../utilis/Images";

const Contact = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative bg-[#213b52] text-white mb-8 overflow-hidden h-60 w-full">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
            <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
          <p className="text-xl">Feel free To Contact Us</p>
          </div>

          <div className="absolute inset-0 opacity-40">
            {/* <Image
            src={ContactImage}
            alt="About Banner"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          /> */}
          </div>
        </div>
        <section id="contact" className="contact section  py-12 ">
          {/* <!-- Section Title --> */}
          <div
            className="container mx-auto text-center mb-8"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          </div>

          {/* <!-- Google Maps --> */}
          <div
            className="container mx-auto px-10 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <iframe
              className="w-full h-64 rounded-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* <!-- Contact Info --> */}
            <div className="space-y-6 px-10">
              <div
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <FaLocationDot className="text-3xl text-[#213b52]" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Address
                  </h3>
                  <p className="text-gray-900">
                    A108 Adam Street, New York, NY 535022
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <MdAddCall className="text-3xl text-[#213b52]" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Call Us
                  </h3>
                  <p className="text-gray-900">+1 5589 55488 55</p>
                </div>
              </div>

              <div
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <MdMarkEmailRead className="text-3xl text-[#213b52]" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Email Us
                  </h3>
                  <p className="text-gray-900">info@example.com</p>
                </div>
              </div>
            </div>
            {/* 
  <!-- Contact Form --> */}
            <div className="col-span-2">
              <form
                action="forms/contact.php"
                method="post"
                className="space-y-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Message"
                  required
                ></textarea>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#213b52] text-white font-semibold rounded-lg hover:bg-primary-dark focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
