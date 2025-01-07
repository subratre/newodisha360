"use client";
import NewComponent from "@/components/new-component";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";

function MainComponent() {
  const [showBanner, setShowBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [courses, setCourses] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [activeTab, setActiveTab] = useState("myLearning");
  const [testInProgress, setTestInProgress] = useState(false);
  const [timer, setTimer] = useState(1200);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("60");
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const authPopupRef = useRef(null);
  const questions = [
    {
      id: 1,
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      correct: 1,
    },
    {
      id: 2,
      question: "Which river is known as the Ganga of the South?",
      options: ["Godavari", "Krishna", "Kaveri", "Narmada"],
      correct: 0,
    },
    {
      id: 3,
      question: "Who wrote 'Discovery of India'?",
      options: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Sardar Patel",
        "B.R. Ambedkar",
      ],
      correct: 1,
    },
  ];
  const courseCategories = [
    { id: 1, name: "History", image: "/design.jpg" },
    { id: 2, name: "Geography", image: "/illustration.jpg" },
    { id: 3, name: "Economics", image: "/animation.jpg" },
    { id: 4, name: "Polity", image: "/film.jpg" },
  ];
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
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const wizardSteps = [
    {
      question: "What is your primary goal for taking this course?",
      options: [
        "Career Advancement",
        "Personal Growth",
        "Exam Preparation",
        "General Interest",
      ],
    },
    {
      question: "How much time can you dedicate per week?",
      options: ["2-4 hours", "4-6 hours", "6-8 hours", "8+ hours"],
    },
    {
      question: "What is your current knowledge level in this subject?",
      options: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
  ];
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
  const [featuredCourses] = useState([
    {
      id: "f1",
      title: "Complete UPSC Guide 2025",
      description:
        "Comprehensive preparation for UPSC Civil Services Examination",
      highlight: "New Batch Starting Soon",
      price: "₹24,999",
      image: "/assets/newnew.jpeg",
      instructor: "Dr. Rajesh Kumar",
      rating: 4.9,
      students: "15,000+",
    },
    {
      id: "f2",
      title: "Indian History Masterclass",
      description: "Deep dive into Indian History from ancient to modern times",
      highlight: "Most Popular",
      price: "₹12,999",
      image: "/assets/illustration.jpg",
      instructor: "Prof. Anita Singh",
      rating: 4.8,
      students: "12,000+",
    },
    {
      id: "f3",
      title: "Geography for UPSC",
      description:
        "Complete coverage of Geography syllabus with maps and diagrams",
      highlight: "Limited Time Offer",
      price: "₹9,999",
      image: "/assets/animation.jpg",
      instructor: "Dr. Suresh Patel",
      rating: 4.7,
      students: "8,000+",
    },
  ]);

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

  useEffect(() => {
    const coursesByCategory = {
      Featured: [
        {
          id: 1,
          title: "Complete UPSC Preparation",
          instructor: "Dr. Rajesh Kumar",
          students: "25,685",
          duration: "120h",
          image: "/assets/design.jpg",
        },
        {
          id: 2,
          title: "Indian History Masterclass",
          instructor: "Prof. Anita Singh",
          students: "16,220",
          duration: "80h",
          image: "/assets/course-main/illustration.jpg",
        },
        {
          id: 3,
          title: "Geography for UPSC",
          instructor: "Dr. Suresh Patel",
          students: "12,618",
          duration: "60h",
          image: "/assets/course-main/animation.jpg",
        },
        {
          id: 4,
          title: "Economics Fundamentals",
          instructor: "Dr. Priya Sharma",
          students: "13,568",
          duration: "75h",
          image: "/assets/course-main/film.jpg",
        },
      ],
      History: [
        {
          id: 5,
          title: "Ancient Indian History",
          instructor: "Dr. Smith",
          students: "12,345",
          duration: "40h",
          image: "/assets/course-main/design.jpg",
        },
        {
          id: 6,
          title: "Medieval Indian History",
          instructor: "Prof. Jones",
          students: "8,765",
          duration: "35h",
          image: "/assets/course-main/illustration.jpg",
        },
      ],
      Geography: [
        {
          id: 7,
          title: "Physical Geography",
          instructor: "Dr. Brown",
          students: "9,876",
          duration: "45h",
          image: "/assets/course-main/animation.jpg",
        },
        {
          id: 8,
          title: "World Geography",
          instructor: "Prof. Wilson",
          students: "7,654",
          duration: "50h",
          image: "/assets/course-main/film.jpg",
        },
      ],
    };
    const filteredCourses = coursesByCategory[selectedCategory] || [];
    const searchResults = filteredCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCourses(searchResults);
  }, [selectedCategory, searchQuery]);

  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const handleSignIn = () => {
    setUser({ name: "User" });
    setShowSignInPopup(false);
  };
  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  const startTest = useCallback(() => {
    setTestInProgress(true);
    setTimer(1200);
    setCurrentQuestion(0);
  }, []);

  useEffect(() => {
    if (testInProgress && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [testInProgress, timer]);

  const scrollToMoreCourses = () => {
    const element = document.getElementById("more-courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickOutside = (event) => {
    if (authPopupRef.current && !authPopupRef.current.contains(event.target)) {
      setShowSignInPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      {showCounsellingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowCounsellingPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <h2 className="text-2xl font-crimson-text font-bold mb-6 text-center">
              Get all your questions answered with our free expert counselling!
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
              <select
                className="w-full p-3 border rounded-lg"
                name="programmes"
              >
                <option value="">Select Programmes</option>
                <option value="upsc">UPSC</option>
                <option value="state">State Services</option>
                <option value="optional">Optional Subjects</option>
              </select>
              <select className="w-full p-3 border rounded-lg" name="time">
                <option value="">Select Time Preferences</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              <div className="space-y-2">
                <p className="font-medium">Contact Preference:</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="callCounselling" />
                    Call Counselling
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="videoCounselling" />
                    Video Counselling
                  </label>
                </div>
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="whatsapp" />
                Would you like to receive the UPSC syllabus, brochure, etc.
                through Whatsapp?
              </label>
              <button
                type="submit"
                className="w-full bg-[#00ff00] text-black p-3 rounded-lg font-medium hover:bg-[#00dd00]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {user ? (
        <div className="flex flex-col min-h-screen">
          <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-crimson-text font-bold text-[#1a365d]">
                    Study Mentor
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setUser(null)}
                    className="text-[#1a365d] hover:bg-gray-100 px-4 py-2 rounded-full"
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto w-full px-4">
            <div className="bg-white rounded-lg shadow mt-4 overflow-hidden">
              <div className="h-[350px] relative">
                <img
                  src="/banner.jpg"
                  alt="Profile cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex items-end">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white">
                      <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute bottom-2 right-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
                      <i className="fas fa-camera"></i>
                    </button>
                  </div>
                  <div className="ml-4 mb-4">
                    <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                      {user.name}
                    </h1>
                    <p className="text-white text-lg drop-shadow-lg">Student</p>
                  </div>
                </div>
                <button className="absolute bottom-4 right-4 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg">
                  <i className="fas fa-camera mr-2"></i>
                  Edit Cover Photo
                </button>
              </div>

              <div className="border-b">
                <div className="max-w-5xl mx-auto px-4">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex space-x-8">
                      <button
                        onClick={() => setActiveTab("myLearning")}
                        className={`px-4 py-2 font-medium ${
                          activeTab === "myLearning"
                            ? "text-[#1a365d] border-b-4 border-[#1a365d]"
                            : "text-gray-500 hover:bg-gray-100 rounded-lg"
                        }`}
                      >
                        My Learning
                      </button>
                      <button
                        onClick={() => setActiveTab("courses")}
                        className={`px-4 py-2 font-medium ${
                          activeTab === "courses"
                            ? "text-[#1a365d] border-b-4 border-[#1a365d]"
                            : "text-gray-500 hover:bg-gray-100 rounded-lg"
                        }`}
                      >
                        Courses
                      </button>
                      <button
                        onClick={() => setActiveTab("mentorship")}
                        className={`px-4 py-2 font-medium ${
                          activeTab === "mentorship"
                            ? "text-[#1a365d] border-b-4 border-[#1a365d]"
                            : "text-gray-500 hover:bg-gray-100 rounded-lg"
                        }`}
                      >
                        1-1 Mentorship
                      </button>
                      <button
                        onClick={() => setActiveTab("mockTest")}
                        className={`px-4 py-2 font-medium ${
                          activeTab === "mockTest"
                            ? "text-[#1a365d] border-b-4 border-[#1a365d]"
                            : "text-gray-500 hover:bg-gray-100 rounded-lg"
                        }`}
                      >
                        MCQs
                      </button>
                      <button
                        onClick={() => setActiveTab("settings")}
                        className={`px-4 py-2 font-medium ${
                          activeTab === "settings"
                            ? "text-[#1a365d] border-b-4 border-[#1a365d]"
                            : "text-gray-500 hover:bg-gray-100 rounded-lg"
                        }`}
                      >
                        Settings
                      </button>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setShowSettings(true)}
                        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                      >
                        <i className="fas fa-pen mr-2"></i>
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex-1">
                {activeTab === "myLearning" && (
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6">My Progress</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Courses Completed</h3>
                        <p className="text-3xl font-bold text-[#00ff00]">
                          12/25
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Mock Tests Taken</h3>
                        <p className="text-3xl font-bold text-[#00ff00]">8</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Average Score</h3>
                        <p className="text-3xl font-bold text-[#00ff00]">76%</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold mb-4">Recent Courses</h3>
                        <div className="space-y-4">
                          {courses.slice(0, 3).map((course) => (
                            <div
                              key={course.id}
                              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                            >
                              <div>
                                <h4 className="font-bold">{course.title}</h4>
                                <p className="text-sm text-gray-600">
                                  Progress: 65%
                                </p>
                              </div>
                              <a
                                href={`/course/${course.id}`}
                                className="bg-[#00ff00] text-black px-4 py-2 rounded-lg"
                              >
                                Continue
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-4">Recent Mock Tests</h3>
                        <div className="space-y-4">
                          {[1, 2, 3].map((test) => (
                            <div
                              key={test}
                              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                            >
                              <div>
                                <h4 className="font-bold">Mock Test #{test}</h4>
                                <p className="text-sm text-gray-600">
                                  Score: 78%
                                </p>
                              </div>
                              <button className="text-blue-600">
                                View Feedback
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "courses" && selectedCourse ? (
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2">
                        <div className="flex justify-between items-center mb-6">
                          <button
                            onClick={() => setSelectedCourse(null)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <i className="fas fa-arrow-left mr-2"></i>Back
                          </button>
                        </div>
                        <img
                          src={selectedCourse.image}
                          alt={selectedCourse.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h2 className="text-2xl font-bold mb-4">
                          {selectedCourse.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          Instructor: {selectedCourse.instructor}
                        </p>
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-bold mb-4">
                              Course Contents
                            </h3>
                            <div className="space-y-4">
                              {[
                                "Introduction",
                                "Basic Concepts",
                                "Advanced Topics",
                                "Practice Tests",
                              ].map((chapter, index) => (
                                <div
                                  key={index}
                                  className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                                >
                                  <div className="flex justify-between items-center">
                                    <span className="font-medium">
                                      {chapter}
                                    </span>
                                    <i className="fas fa-chevron-right"></i>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-6">Mock Test</h3>
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-bold mb-4">
                              Question {currentQuestion + 1}
                            </h4>
                            <p className="mb-6">
                              What is the capital of India?
                            </p>
                            <div className="space-y-3">
                              {["Mumbai", "Delhi", "Kolkata", "Chennai"].map(
                                (option, index) => (
                                  <button
                                    key={index}
                                    className="w-full text-left p-4 border rounded-lg hover:bg-gray-50"
                                  >
                                    {option}
                                  </button>
                                )
                              )}
                            </div>
                            <div className="mt-6 pt-6 border-t">
                              <div className="flex justify-between">
                                <button
                                  onClick={() =>
                                    setCurrentQuestion((prev) =>
                                      Math.max(0, prev - 1)
                                    )
                                  }
                                  className="px-6 py-2 bg-gray-100 rounded-lg"
                                >
                                  Previous
                                </button>
                                <button
                                  onClick={() =>
                                    setCurrentQuestion((prev) => prev + 1)
                                  }
                                  className="px-6 py-2 bg-[#00ff00] text-black rounded-lg"
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-bold mb-4">Explanation</h4>
                            <p>
                              Delhi is the capital of India. It serves as both
                              the political and administrative capital of the
                              country.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex justify-between mb-6">
                      <input
                        type="text"
                        placeholder="Search courses..."
                        className="px-4 py-2 border rounded-lg w-64"
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <div className="space-x-2">
                        <button className="px-4 py-2 bg-gray-100 rounded-lg">
                          <i className="fas fa-bookmark mr-2"></i>Bookmarks
                        </button>
                        <button className="px-4 py-2 bg-[#00ff00] text-black rounded-lg">
                          <i className="fas fa-plus mr-2"></i>New Course
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {courses.map((course) => (
                        <div key={course.id} className="border rounded-lg p-4">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                          />
                          <h3 className="font-bold mb-2">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {course.instructor}
                          </p>
                          <div className="flex justify-between items-center">
                            <button className="text-gray-600">
                              <i className="far fa-bookmark"></i>
                            </button>
                            <button
                              onClick={() => setSelectedCourse(course)}
                              className="bg-[#00ff00] text-black px-4 py-2 rounded-lg"
                            >
                              Start Course
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === "mentorship" && (
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6">
                      1-1 Mentorship Sessions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4">
                          Upcoming Sessions
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-bold">History Revision</h4>
                              <span className="text-sm text-gray-600">
                                Tomorrow, 10:00 AM
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              with Dr. Smith
                            </p>
                            <button className="bg-[#00ff00] text-black px-4 py-2 rounded-lg">
                              Join Session
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4">
                          Book New Session
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-7 gap-1 mb-4">
                            {[...Array.from({ length: 7 })].map((_, i) => {
                              const date = new Date();
                              date.setDate(date.getDate() + i);
                              return (
                                <button
                                  key={i}
                                  onClick={() => setSelectedDate(date)}
                                  className={`p-2 text-center rounded-lg ${
                                    selectedDate?.getDate() === date.getDate()
                                      ? "bg-[#00ff00] text-black"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <div className="text-xs">
                                    {date.toLocaleDateString("en-US", {
                                      weekday: "short",
                                    })}
                                  </div>
                                  <div className="font-bold">
                                    {date.getDate()}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                          {selectedDate && (
                            <div className="grid grid-cols-4 gap-2">
                              {[
                                "09:00",
                                "10:00",
                                "11:00",
                                "14:00",
                                "15:00",
                                "16:00",
                                "17:00",
                                "18:00",
                              ].map((time) => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`p-2 text-center rounded-lg ${
                                    selectedTime === time
                                      ? "bg-[#00ff00] text-black"
                                      : "border hover:bg-gray-100"
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          )}
                          {selectedTime && (
                            <>
                              <select
                                value={selectedDuration}
                                onChange={(e) =>
                                  setSelectedDuration(e.target.value)
                                }
                                className="w-full p-2 border rounded-lg"
                              >
                                <option value="30">30 minutes</option>
                                <option value="60">1 hour</option>
                              </select>
                              <select
                                value={selectedSubject}
                                onChange={(e) =>
                                  setSelectedSubject(e.target.value)
                                }
                                className="w-full p-2 border rounded-lg"
                              >
                                <option value="">Select Subject</option>
                                <option value="history">History</option>
                                <option value="geography">Geography</option>
                                <option value="economics">Economics</option>
                              </select>
                              <select
                                value={selectedTutor}
                                onChange={(e) =>
                                  setSelectedTutor(e.target.value)
                                }
                                className="w-full p-2 border rounded-lg"
                              >
                                <option value="">Select Tutor</option>
                                <option value="dr-smith">Dr. Smith</option>
                                <option value="prof-jones">Prof. Jones</option>
                                <option value="dr-brown">Dr. Brown</option>
                              </select>
                              <button
                                className="w-full bg-[#00ff00] text-black px-4 py-2 rounded-lg"
                                disabled={!selectedSubject || !selectedTutor}
                              >
                                Schedule Session
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "mockTest" && (
                  <div className="bg-white rounded-lg p-6">
                    {testInProgress ? (
                      <div className="max-w-3xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                          <h2 className="text-2xl font-bold">MCQ Test</h2>
                          <div className="text-xl font-bold">
                            Time Remaining: {Math.floor(timer / 60)}:
                            {(timer % 60).toString().padStart(2, "0")}
                          </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                          <h3 className="text-lg font-bold mb-4">
                            Question {currentQuestion + 1} of {questions.length}
                          </h3>
                          <p className="text-lg mb-6">
                            {questions[currentQuestion].question}
                          </p>
                          <div className="space-y-4">
                            {questions[currentQuestion].options.map(
                              (option, index) => (
                                <button
                                  key={index}
                                  onClick={() =>
                                    setSelectedAnswers((prev) => ({
                                      ...prev,
                                      [currentQuestion]: index,
                                    }))
                                  }
                                  className={`w-full text-left p-4 rounded-lg border ${
                                    selectedAnswers[currentQuestion] === index
                                      ? "bg-[#00ff00] text-black border-[#00ff00]"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  {option}
                                </button>
                              )
                            )}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <button
                            onClick={() =>
                              setCurrentQuestion((prev) =>
                                Math.max(0, prev - 1)
                              )
                            }
                            disabled={currentQuestion === 0}
                            className="px-6 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
                          >
                            Previous
                          </button>
                          {currentQuestion < questions.length - 1 ? (
                            <button
                              onClick={() =>
                                setCurrentQuestion((prev) => prev + 1)
                              }
                              className="px-6 py-2 bg-[#00ff00] text-black rounded-lg"
                            >
                              Next
                            </button>
                          ) : (
                            <button
                              onClick={() => setTestInProgress(false)}
                              className="px-6 py-2 bg-[#00ff00] text-black rounded-lg"
                            >
                              Submit Test
                            </button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                          <h3 className="text-xl font-bold mb-4">
                            Economics Fundamentals
                          </h3>
                          <div className="space-y-4">
                            {[...Array.from({ length: 4 })].map((_, i) => (
                              <div
                                key={i}
                                onClick={startTest}
                                className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100"
                              >
                                <div className="flex items-center gap-4">
                                  <i className="fas fa-clock text-[#00ff00]"></i>
                                  <div>
                                    <h4 className="font-bold">
                                      {30 - i} December 2024 MCQs Test
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      10 Questions • 20 Minutes
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                          <h3 className="text-xl font-bold mb-4">Odisha</h3>
                          <div className="space-y-4">
                            {[...Array.from({ length: 4 })].map((_, i) => (
                              <div
                                key={i}
                                onClick={startTest}
                                className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100"
                              >
                                <div className="flex items-center gap-4">
                                  <i className="fas fa-clock text-[#00ff00]"></i>
                                  <div>
                                    <h4 className="font-bold">
                                      {30 - i} December 2024 MCQs Test
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      10 Questions • 20 Minutes
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                          <h3 className="text-xl font-bold mb-4">
                            Current Affairs
                          </h3>
                          <div className="space-y-4">
                            {[...Array.from({ length: 4 })].map((_, i) => (
                              <div
                                key={i}
                                onClick={startTest}
                                className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100"
                              >
                                <div className="flex items-center gap-4">
                                  <i className="fas fa-clock text-[#00ff00]"></i>
                                  <div>
                                    <h4 className="font-bold">
                                      {30 - i} December 2024 MCQs Test
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      10 Questions • 20 Minutes
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {activeTab === "settings" && (
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6">Settings</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-4">
                          Account Settings
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              className="w-full p-2 border rounded-lg"
                              placeholder="your@email.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Password
                            </label>
                            <button className="text-blue-600">
                              Change Password
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-4">
                          Notifications
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span>Email Notifications</span>
                            <button className="w-12 h-6 bg-[#00ff00] rounded-full relative">
                              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Push Notifications</span>
                            <button className="w-12 h-6 bg-gray-200 rounded-full relative">
                              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-4">Privacy</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span>Profile Visibility</span>
                            <select className="p-2 border rounded-lg">
                              <option>Public</option>
                              <option>Private</option>
                              <option>Friends Only</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="pt-6 border-t">
                        <button className="bg-[#00ff00] text-black px-4 py-2 rounded-lg">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <div className="px-4 py-2 space-y-2">
                <button
                  onClick={scrollToMoreCourses}
                  className="block w-full text-left font-lato text-gray-600 py-2"
                >
                  Browse
                </button>
                <button
                  onClick={() => {
                    setShowCounsellingPopup(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left font-lato text-gray-600 py-2"
                >
                  Counselling
                </button>
                <button
                  onClick={() => {
                    handleSignIn();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#1a365d] text-white px-4 py-2 rounded-lg font-lato"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
          {showSignInPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div
                className="bg-white rounded-lg p-8 max-w-md w-full relative"
                ref={authPopupRef}
              >
                <button
                  onClick={() => setShowSignInPopup(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
                <h2 className="text-2xl font-crimson-text font-bold mb-6 text-center">
                  Sign In
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={handleSignIn}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 p-3 rounded-lg font-lato hover:bg-gray-50"
                  >
                    <i className="fab fa-google"></i>
                    Continue with Google
                  </button>
                  {/* <button
                    onClick={handleSignIn}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 p-3 rounded-lg font-lato hover:bg-gray-50"
                  >
                    <i className="fab fa-facebook"></i>
                    Continue with Facebook
                  </button>
                  <button
                    onClick={handleSignIn}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 p-3 rounded-lg font-lato hover:bg-gray-50"
                  >
                    <i className="fab fa-apple"></i>
                    Continue with Apple
                  </button> */}
                  <button
                    onClick={handleSignIn}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 p-3 rounded-lg font-lato hover:bg-gray-50"
                  >
                    <i className="fas fa-envelope"></i>
                    Continue with Email
                  </button>
                </div>
              </div>
            </div>
          )}
          <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
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
            {/* <section className="bg-black text-white py-16 -mx-4 px-4 mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-crimson-text mb-12">
                  Creative Learning Made Easy
                </h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check text-[#00ff00] text-2xl"></i>
                    <p className="text-xl font-lato">
                      Thousands of creative classes. Beginner to pro.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check text-[#00ff00] text-2xl"></i>
                    <p className="text-xl font-lato">
                      Taught by creative pros and industry icons.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check text-[#00ff00] text-2xl"></i>
                    <p className="text-xl font-lato">
                      Learning Paths to help you achieve your goals.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check text-[#00ff00] text-2xl"></i>
                    <p className="text-xl font-lato">
                      Certificates to celebrate your accomplishments.
                    </p>
                  </div>
                </div>
              </div>
            </section> */}
            <section className="mb-16">
              <h2 className="text-3xl font-crimson-text font-bold mb-8">
                Featured Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#00ff00] text-black px-3 py-1 rounded-full text-sm font-bold">
                        {course.highlight}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold font-crimson-text">
                          {course.title}
                        </h3>
                        <p className="text-2xl font-bold text-[#00ff00]">
                          {course.price}
                        </p>
                      </div>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-[#00ff00]">
                          {[...Array.from({ length: 5 })].map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star ${
                                i < Math.floor(course.rating)
                                  ? ""
                                  : "text-gray-300"
                              }`}
                            ></i>
                          ))}
                        </div>
                        <span className="text-gray-600">
                          ({course.students} students)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-6">
                        <img
                          src="/profile.jpg"
                          alt={course.instructor}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-gray-600">
                          {course.instructor}
                        </span>
                      </div>
                      <button className="w-full bg-[#00ff00] text-black py-3 rounded-lg font-bold hover:bg-[#00dd00] transition-colors mb-3">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/courses"
                  // onClick={scrollToMoreCourses}
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                >
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </section>
            {/* <section className="bg-white py-16 -mx-4 px-4 mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-crimson-text font-bold mb-12">
                  Simple Pricing for Everyone
                </h2>
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto">
                  <div className="mb-8">
                    <h3 className="text-2xl font-crimson-text font-bold mb-2">
                      Complete Access
                    </h3>
                    <p className="text-gray-600 font-lato mb-4">
                      First month free, then
                    </p>
                    <div className="flex justify-center items-baseline mb-4">
                      <span className="text-5xl font-crimson-text font-bold">
                        ₹999
                      </span>
                      <span className="text-gray-600 font-lato ml-2">
                        /month
                      </span>
                    </div>
                    <button className="w-full bg-[#00ff00] text-black px-8 py-4 rounded-lg font-lato text-lg hover:bg-[#00dd00] transition-colors duration-200">
                      Start Free Trial
                    </button>
                  </div>
                  <div className="border-t pt-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-check text-[#00ff00]"></i>
                        <p className="text-gray-700 font-lato">
                          All courses included
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="fas fa-check text-[#00ff00]"></i>
                        <p className="text-gray-700 font-lato">
                          Live mentorship sessions
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="fas fa-check text-[#00ff00]"></i>
                        <p className="text-gray-700 font-lato">
                          Practice tests & assignments
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="fas fa-check text-[#00ff00]"></i>
                        <p className="text-gray-700 font-lato">
                          Downloadable resources
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
              <div>
                <h3 className="text-4xl font-crimson-text text-[#00ff00] font-bold">
                  25K+
                </h3>
                <p className="text-gray-600 font-lato">CLASSES</p>
              </div>
              <div>
                <h3 className="text-4xl font-crimson-text text-[#00ff00] font-bold">
                  600K+
                </h3>
                <p className="text-gray-600 font-lato">MEMBERS</p>
              </div>
              <div>
                <h3 className="text-4xl font-crimson-text text-[#00ff00] font-bold">
                  8K+
                </h3>
                <p className="text-gray-600 font-lato">TEACHERS</p>
              </div>
              <div>
                <h3 className="text-4xl font-crimson-text text-[#00ff00] font-bold">
                  4.8
                </h3>
                <p className="text-gray-600 font-lato">APP STORE RATING</p>
              </div>
            </section> */}

            <NewComponent
              title="Why Students Love Study Mentor"
              testimonials={testimonials}
            />
            <section className="mb-16 bg-gray-100 py-16 -mx-4 px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-crimson-text font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "How do I get started with Study Mentor?",
                      answer:
                        "Simply sign up for a free 7-day trial and get instant access to all our study materials and features.",
                    },
                    {
                      question: "What subjects do you cover?",
                      answer:
                        "We cover all UPSC subjects including History, Geography, Economics, Polity, and more.",
                    },
                    {
                      question: "Do you provide mentorship?",
                      answer:
                        "Yes, we offer one-on-one mentorship with experienced IAS officers and subject experts.",
                    },
                    {
                      question: "How often is the study material updated?",
                      answer:
                        "Our content is updated daily to include the latest current affairs and exam-relevant information.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="font-crimson-text text-xl font-bold">
                          {faq.question}
                        </h3>
                        <i
                          className={`fas fa-chevron-down transform transition-transform duration-200 ${
                            activeAccordion === index ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          activeAccordion === index ? "max-h-40" : "max-h-0"
                        }`}
                      >
                        <p className="px-6 pb-4 text-gray-700 font-lato">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <button className="bg-[#00ff00] text-black px-8 py-4 rounded-lg font-lato text-lg hover:bg-[#00dd00] transition-colors duration-200">
                    Start Exploring
                  </button>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
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
      `}</style>
    </div>
  );
}

export default MainComponent;
