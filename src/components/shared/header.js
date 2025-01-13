import Link from "next/link";
import React from "react";
import Navigation from "../navigation";

const Header = () => {
  return (
    <>
      <div>
        <div className="bg-[#00ff00] text-black py-2 px-4 text-center relative">
          <div className="flex items-center justify-center gap-2">
            <span className="animate-pulse">🎓</span>
            <p className="font-lato">
              Special offer: Get 50% off on all courses! Limited time only.
            </p>
            <button
              // onClick={() => setShowSignInPopup(true)}
              className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 ml-4"
            >
              Join Now
            </button>
          </div>
          <button
            // onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-crimson-text font-bold text-black">
                  Study Mentor
                </h1>
              </Link>
            </div>

            <Navigation />

            <button
              className="md:hidden text-gray-600"
              // onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
