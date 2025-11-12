import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className=" dark:text-gray-300 shadow-top py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-extrabold text-[#7c3aed] tracking-wide">
            FinEase
          </h2>
          <p className="text-sm mt-1 dark:text-gray-400">
            Empowering your finances with clarity and ease.
          </p>
          <span className="text-xs mt-2 text-gray-500">
            © {new Date().getFullYear()} FinEase. All rights reserved.
          </span>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li>
            <NavLink
              to="/policy"
              className="hover:text-[#7c3aed] transition-colors duration-300"
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms"
              className="hover:text-[#7c3aed] transition-colors duration-300"
            >
              Terms & Conditions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mailto:abdullahalasad106882@gmail.com"
              className="hover:text-[#7c3aed] transition-colors duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877F2] transition-colors duration-300"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1DA1F2] transition-colors duration-300"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4405F] transition-colors duration-300"
          >
            <FaInstagramSquare size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
