import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="shadow-top  dark:text-gray-200  ">
      <div className="w-9/10 mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="text-2xl font-bold text-[#7c3aed] ">FinEase</span>
          <span className="text-sm  dark:text-gray-200">
            © {new Date().getFullYear()} All rights reserved
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm md:text-base  justify-center">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink to="/policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="mailto:abdullahalasad106882@gmail.com" className="">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center md:justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagramSquare size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
