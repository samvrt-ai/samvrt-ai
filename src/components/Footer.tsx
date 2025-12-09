"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-12 pb-6">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left Brand Section */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide">SAMVRT AI</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Transforming ideas into intelligent innovation
            </p>

            {/* Legal entity info */}
            <div className="mt-4 text-xs text-gray-400 max-w-sm space-y-1">
              <p className="font-semibold text-gray-300">
                SAMVIT AI SOLUTIONS PRIVATE LIMITED
              </p>
              <p>
                CIN: U62099KA2025PTC207783 &nbsp;|&nbsp; Reg. No.: 207783
              </p>
              <p>
                As per MCA records, SAMVIT AI SOLUTIONS PRIVATE LIMITED is
                involved in activities such as other information technology and
                computer service activities n.e.c.
              </p>
              <p className="mt-2">
                Directors / Key Management Personnel:&nbsp;
                <span className="block md:inline">
                  SRI DATTA SAI AGASTHYA KASTURI,&nbsp;
                  SRIKRISHNA CHANDRA KASTURI,&nbsp;
                  LAVANYA KASTURI
                </span>
              </p>
            </div>

            {/* Partner Logos */}
            <div className="flex items-center gap-6 mt-5">
              <img src="/google_icon.jpg" className="h-6 invert opacity-90" />
              <img src="/meta.jpg" className="h-6 invert opacity-90" />
              <img src="/shopify_icons.jpg" className="h-6 invert opacity-90" />
            </div>
          </div>

          {/* INDIA / REGISTERED OFFICE ADDRESS */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">REGISTERED OFFICE (INDIA)</h3>

            <p className="flex items-start gap-3 text-gray-300 text-sm">
              <FaMapMarkerAlt className="text-gray-400 mt-1" />
              <span>
                Flat #103, Yashna Summit,
                <br />
                Somasundrapalya, HSR Layout,
                <br />
                Bangalore South, Karnataka, India – 560102
              </span>
            </p>

            <p className="flex items-center gap-3 text-gray-300 text-sm">
              <FaPhoneAlt className="text-gray-400" />
              +91 7292 050505
            </p>

            <p className="flex items-center gap-3 text-gray-300 text-sm">
              <FaEnvelope className="text-gray-400" />
              support@samvrt.ai
            </p>

            {/* Social icons */}
            <div className="mt-4">
              <span className="font-semibold text-gray-200">FOLLOW US :</span>
              <div className="flex items-center gap-3 mt-2">
                <FaYoutube className="text-xl cursor-pointer hover:text-red-400" />
                <FaInstagram className="text-xl cursor-pointer hover:text-pink-400" />
                <FaLinkedin className="text-xl cursor-pointer hover:text-blue-400" />
                <FaFacebookF className="text-xl cursor-pointer hover:text-blue-300" />
              </div>
            </div>
          </div>

          {/* USA ADDRESS */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">USA ADDRESS</h3>

            <p className="flex items-start gap-3 text-gray-300 text-sm">
              <FaMapMarkerAlt className="text-gray-400 mt-1" />
              <span>
                15851 Dallas Parkway #1021,
                <br />
                Addison, TX 75001
              </span>
            </p>

            <p className="flex items-center gap-3 text-gray-300 text-sm">
              <FaPhoneAlt className="text-gray-400" />
              +1 205 465 0505
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-b border-gray-700 my-10"></div>

        {/* FOOTER GRID LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 text-sm">
          {/* SERVICES */}
          <div>
            <h4 className="font-bold mb-3 text-gray-200">SERVICES</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>AI Solutions</li>
              <li>Cloud Integration</li>
              <li>API Development</li>
              <li>SEO Services</li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="font-bold mb-3 text-gray-200">SOLUTIONS</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI Automation</li>
              <li>CRM Solutions</li>
              <li>ERP Solutions</li>
              <li>HRM Solutions</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold mb-3 text-gray-200">QUICK LINKS</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Industries</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className="font-bold mb-3 text-gray-200">INDUSTRIES WE SERVE</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Retail &amp; E-commerce</li>
              <li>Healthcare</li>
              <li>EdTech</li>
              <li>Finance</li>
              <li>Logistics &amp; Transport</li>
              <li>Media &amp; Entertainment</li>
            </ul>
          </div>

          {/* LOCATION SPECIFIC */}
          <div>
            <h4 className="font-bold mb-3 text-gray-200">LOCATION-SPECIFIC</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Digital Marketing in Delhi</li>
              <li>SEO Company in Delhi</li>
              <li>Web Development in Delhi</li>
              <li>Mobile App Dev in Delhi</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-10 text-center text-gray-500 text-sm space-y-1">
          <p>© {new Date().getFullYear()} SAMVRT AI. All Rights Reserved.</p>
          <p className="text-[11px] text-gray-500">
            Registered entity: SAMVIT AI SOLUTIONS PRIVATE LIMITED (CIN: U62099KA2025PTC207783)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
