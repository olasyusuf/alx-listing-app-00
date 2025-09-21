import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-blue-600">StayFinder</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Discover luxury stays around the world with comfort, elegance, and style.  
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">About Us</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">FAQs</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-3">Stay Updated</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} StayFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
