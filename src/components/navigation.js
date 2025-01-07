import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link
        // onClick={scrollToMoreCourses}
        href="/courses"
        className="font-lato text-gray-600 hover:text-black"
      >
        Browse
      </Link>
      <Link
        href="/counselling"
        // onClick={() => setShowCounsellingPopup(true)}
        className="font-lato text-gray-600 hover:text-black"
      >
        Counselling
      </Link>
      <Link
        href="/profile"
        // onClick={handleSignIn}
        className="bg-[#00ff00] text-black px-4 py-2 rounded-lg font-lato"
      >
        Sign In
      </Link>
    </div>
  );
};

export default Navigation;
