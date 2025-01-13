"use client";
import React, { useState } from "react";

function NewComponent() {
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
  return (
    <section className="mb-16 bg-gradient-to-r from-[#1a365d] to-[#2d3748] py-16 -mx-4 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-crimson-text font-bold text-white text-center mb-12">
          Why Students Love Study Mentor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-crimson-text font-bold text-xl">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 font-roboto">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 font-roboto mb-4">
                {testimonial.text}
              </p>
              <div className="flex text-[#00ff00]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewComponentStory() {
  const testimonials = [
    {
      id: 1,
      image: "path/to/profile1.jpg",
      name: "John Doe",
      role: "Student",
      text: "This platform is amazing for my studies!",
      rating: 5,
    },
    {
      id: 2,
      image: "path/to/profile2.jpg",
      name: "Jane Smith",
      role: "Researcher",
      text: "A wonderful resource for students everywhere.",
      rating: 4,
    },
    {
      id: 3,
      image: "path/to/profile3.jpg",
      name: "Jim Brown",
      role: "Tutor",
      text: "Helps me organize my tutoring sessions effectively.",
      rating: 5,
    },
  ];

  return (
    <div>
      <NewComponent
        title="Why Students Love Study Mentor"
        testimonials={testimonials}
      />
    </div>
  );
}

export default NewComponent;
