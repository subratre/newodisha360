import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex items-center space-x-8">
            <h3 className="font-crimson-text text-xl font-bold">
              Study Mentor
            </h3>
            <div className="flex space-x-4 text-xl">
              <i className="fab fa-facebook hover:text-[#00ff00] cursor-pointer"></i>
              <i className="fab fa-twitter hover:text-[#00ff00] cursor-pointer"></i>
              <i className="fab fa-instagram hover:text-[#00ff00] cursor-pointer"></i>
              <i className="fab fa-linkedin hover:text-[#00ff00] cursor-pointer"></i>
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <a href="#" className="text-sm font-lato hover:text-[#00ff00]">
              About
            </a>
            <a href="#" className="text-sm font-lato hover:text-[#00ff00]">
              Mentors
            </a>
            <a href="#" className="text-sm font-lato hover:text-[#00ff00]">
              Success Stories
            </a>
            <a href="#" className="text-sm font-lato hover:text-[#00ff00]">
              Contact
            </a>
            <a href="#" className="text-sm font-lato hover:text-[#00ff00]">
              Study Materials
            </a>
            <a href="#" className="text-sm font-lato hover:text-[#00ff00]">
              MCQs
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700 text-center font-lato text-sm">
          <p>© 2024 Study Mentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
