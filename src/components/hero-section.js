"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselMessages] = useState([
    {
      title: "Unlock Your Potential",
      text: "Join thousands of students preparing for UPSC examinations",
      icon: "🎯",
    },
    {
      title: "Learn from Experts",
      text: "Get mentored by experienced IAS officers and educators",
      icon: "👨‍🏫",
    },
    {
      title: "Comprehensive Resources",
      text: "Access curated study materials and practice tests",
      icon: "📚",
    },
    {
      title: "Interactive Learning",
      text: "Engage in live sessions and discussions",
      icon: "💡",
    },
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCounsellingPopup, setShowCounsellingPopup] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "UPSC Aspirant",
      image: "/student1.jpg",
      text: "Study Mentor transformed my preparation journey. The mentors are exceptional and the study material is comprehensive.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "IAS Officer",
      image: "/student2.jpg",
      text: "Thanks to Study Mentor, I cleared my exam in the first attempt. The structured approach made all the difference.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "State Services",
      image: "/student3.jpg",
      text: "The mock tests and personalized feedback helped me identify my weaknesses and improve systematically.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % carouselMessages.length);
    }, 3000);
    return () => clearInterval(messageTimer);
  }, [carouselMessages.length]);

  return (
    <section className="relative mb-12 h-[500px]">
      <div className="absolute inset-0">
        <img
          src="assets/ai-img.jpeg"
          alt="Creative background showing various artistic elements"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex md:flex-row flex-col items-center justify-between px-8">
        <div className="md:w-1/2 w-full text-center md:text-left">
          <div
            key={currentMessageIndex}
            style={{ animation: "slideIn 0.5s ease-out" }}
          >
            <span className="text-6xl mb-4 block">
              {carouselMessages[currentMessageIndex].icon}
            </span>
            <h2 className="text-5xl font-crimson-text font-bold text-white mb-4">
              {carouselMessages[currentMessageIndex].title}
            </h2>
            <p
              className="text-white font-lato text-xl max-w-2xl mb-8"
              style={{ animation: "fadeIn 0.5s ease-out" }}
            >
              {carouselMessages[currentMessageIndex].text}
            </p>
          </div>
          <button
            onClick={() => setShowSignInPopup(true)}
            className="bg-[#00ff00] text-black px-8 py-4 rounded-lg font-lato text-lg hover:bg-[#00dd00] transition-colors duration-200"
          >
            Start Learning Now
          </button>
        </div>
      </div>
    </section>
  );
};

<style jsx global>{`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .hover-float:hover {
    animation: float 2s ease-in-out infinite;
  }
  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }
`}</style>;

export default Hero;
