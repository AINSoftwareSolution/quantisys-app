import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterLogo,} from "../utilis/Images";
import { FaLinkedin, FaFacebook, FaInstagram, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
 import { MdAddIcCall} from "react-icons/md";
 import { FaLocationDot } from "react-icons/fa6";




const Footer = () => {
  return (
    <footer className="bg-[#213b52] text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src={FooterLogo}
              alt="Logo"
              width={200}
              height={100}
              className="rounded-lg"
            />
            <p className="mt-4 text-sm text-white/80">
              Where innovation meets the travel and tourism industry. We
              specialize in delivering cutting-edge B2B services that empower
              travel businesses to thrive in today&apos;s dynamic marketplace.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.linkedin.com/company/quantisys-global/about/"
                target="_blank"
                className="text-3xl hover:text-blue-500"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61568875911051"
                target="_blank"
                className="text-3xl hover:text-blue-600"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://x.com/quantisysglobal"
                target="_blank"
                className="text-3xl hover:text-blue-400"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/quantisysglobal/"
                target="_blank"
                className="text-3xl hover:text-pink-400"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          
          <div className="pl-8">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center gap-4 mb-4"> 
            <MdAddIcCall className="text-2xl"/>

  <Link href="tel:+911800123444" className="text-sm">
    +91-7709 502204
  </Link>
</div>

<div className="flex items-center gap-4 mb-4">
<MdMarkEmailUnread className="text-2xl" />

  <Link href="mailto:info@quantisysglobal.com" className="text-sm">
    info@quantisysglobal.com
  </Link>
</div>

<div className="flex items-center gap-4">
<FaLocationDot className="text-2xl"/>

  <p className="text-sm">
    The VUE, Parge Colony, Pune, Maharashtra 411048, IN
  </p>
</div>

          </div>

          {/* Quick Links */}
          <div className="pl-8">
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/home"
                  className="text-sm hover:underline hover:text-white/80"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:underline hover:text-white/80"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:underline hover:text-white/80"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:underline hover:text-white/80"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/Terms&Condition"
                  className="text-sm hover:underline hover:text-white/80"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:underline hover:text-white/80"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="my-8 border-white/30" />
        <div className="text-center text-xs text-white/70">
          © Copyright All Rights Reserved by Quantisysglobal.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
