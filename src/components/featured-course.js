"use client";
import Link from "next/link";
import React, { useState } from "react";

const FeaturedCourse = () => {
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
  return (
    <section className="mb-16">
      <div className="container mx-auto">
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
        <div className="text-center mt-8">
          <Link
            href="/courses"
            // onClick={scrollToMoreCourses}
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
          >
            Learn More <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
