import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-blue-800 py-8">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap ml-30 justify-center md:justify-evenly space-x-10">
            <a href="/privacy-policy" className="hover:text-gray-400 transition">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="hover:text-gray-400 transition">
              Terms & Conditions
            </a>
            <a href="/contact-us" className="hover:text-gray-400 transition">
              Contact Us
            </a>
          </div>

          <div className="text-center -ml-20">
            <p className="text-xl font-semibold">
              All copyrights Reserved @MAI
            </p>
          </div>

          <div className="flex mr-30 space-x-4">
            <p>Social Networks:</p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fa-brands fa-google"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;