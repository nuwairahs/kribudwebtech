import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black font-inter text-white py-16 px-6 md:px-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Kribudwebtech</h2>
          <p className="text-sm text-gray-400 leading-6">
            37-39 Station Rd, Old Harlow, Harlow CM17 0AS, <br />
            Back Side, Bishop’s Stortford, UK
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-50">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-neutral-500 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-300 hover:text-neutral-500  transition-all duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-neutral-500 transition-all duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className="text-gray-300 hover:text-neutral-500 transition-all duration-300"
              >
                Clients
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-50">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Domain and Hosting</li>
            <li>IT Consultations</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-50">Follow Us</h3>
          <p className="text-sm text-gray-400">
            Stay connected on social media
          </p>
          <div className="flex space-x-6 text-3xl text-gray-300">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/kribudai/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/kribud6"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF0000] hover:scale-110 transition-all duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-300 mt-12 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Kribudwebtech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
