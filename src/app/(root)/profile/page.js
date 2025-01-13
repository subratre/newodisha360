"use client";
import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("myLearning");
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [testInProgress, setTestInProgress] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <nav className="bg-white shadow-lg sticky top-0 z-50">
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
      </nav> */}

      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="bg-white rounded-lg shadow mt-4 overflow-hidden">
          <div className="h-[350px] relative">
            <img
              src="/assets/banner.jpg"
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
                  {user?.name}
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
                    <p className="text-3xl font-bold text-[#00ff00]">12/25</p>
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
                            <p className="text-sm text-gray-600">Score: 78%</p>
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
                                <span className="font-medium">{chapter}</span>
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
                        <p className="mb-6">What is the capital of India?</p>
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
                          Delhi is the capital of India. It serves as both the
                          political and administrative capital of the country.
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
                    <h3 className="text-xl font-bold mb-4">Book New Session</h3>
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
                              <div className="font-bold">{date.getDate()}</div>
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
                            onChange={(e) => setSelectedSubject(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                          >
                            <option value="">Select Subject</option>
                            <option value="history">History</option>
                            <option value="geography">Geography</option>
                            <option value="economics">Economics</option>
                          </select>
                          <select
                            value={selectedTutor}
                            onChange={(e) => setSelectedTutor(e.target.value)}
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
                          setCurrentQuestion((prev) => Math.max(0, prev - 1))
                        }
                        disabled={currentQuestion === 0}
                        className="px-6 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
                      >
                        Previous
                      </button>
                      {currentQuestion < questions.length - 1 ? (
                        <button
                          onClick={() => setCurrentQuestion((prev) => prev + 1)}
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
                            // onClick={startTest}
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
                            // onClick={startTest}
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
                            // onClick={startTest}
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
                    <h3 className="text-lg font-bold mb-4">Account Settings</h3>
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
                    <h3 className="text-lg font-bold mb-4">Notifications</h3>
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
  );
};

export default Profile;
