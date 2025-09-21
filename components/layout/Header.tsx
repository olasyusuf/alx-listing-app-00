import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 m-4">
          <span className="text-2xl font-bold text-blue-600">StayFinder</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Rooms
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Mansion
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Countryside
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Villas
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Beachfront
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600">Sign in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Search & Navigation */}
      <div className="md:hidden px-6 pb-4 space-y-4">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <nav className="flex flex-wrap gap-4">
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Rooms
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Mansion
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Countryside
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Villas
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Beachfront
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
