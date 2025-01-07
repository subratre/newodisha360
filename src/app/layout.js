import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Odisha360",
  description: "Generated by create.xyz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        {children}
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
      </body>
    </html>
  );
}
