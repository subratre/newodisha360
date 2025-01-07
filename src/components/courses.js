"use client";
import React, { useState } from "react";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [courses, setCourses] = useState([]);

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
  return (
    <div>
      <div className="container mx-auto">
        <section className="mb-16 mt-10">
          {/* <h2 className="text-3xl font-crimson-text font-bold mb-8">
              Explore Inspiring Online Courses
            </h2> */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              "Featured",
              "History",
              "Geography",
              "Economics",
              "Polity",
              "Current Affairs",
              "Ethics",
              "Essay Writing",
              "Public Administration",
              "Sociology",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-lato ${
                  selectedCategory === category
                    ? "bg-[#00ff00] text-black"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={`${course.title} course thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-crimson-text text-xl font-bold mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 font-lato text-sm mb-2">
                    {course.instructor}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 font-lato">
                    <span>{course.students} students</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
                            i < Math.floor(course.rating) ? "" : "text-gray-300"
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
                    <span className="text-gray-600">{course.instructor}</span>
                  </div>
                  <button className="w-full bg-[#00ff00] text-black py-3 rounded-lg font-bold hover:bg-[#00dd00] transition-colors mb-3">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
