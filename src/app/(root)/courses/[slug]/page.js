import React from "react";

const CourseDetails = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <a
          href="/"
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Courses
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                // src={course.image}
                // alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-crimson-text font-bold mb-4">
                  testing title
                </h1>
                <p className="text-gray-600 mb-6">description</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-user text-gray-400"></i>
                    <span>active students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock text-gray-400"></i>
                    <span>2 hr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#00ff00]">
                      {/* {[...Array.from({ length: 5 })].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i < Math.floor(course.rating) ? "" : "text-gray-300"
                          }`}
                        ></i>
                      ))} */}
                    </div>
                    <span>{/* {course.rating} */}5</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-xl font-bold mb-4">Course Content</h2>
                  <div className="space-y-2">
                    {/* {course.chapters.map((chapter, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <span>{chapter}</span>
                        <i className="fas fa-lock text-gray-400"></i>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold mb-2">
                  {/* {course.price} */}250
                </h2>
                <button className="w-full bg-[#00ff00] text-black py-3 rounded-lg font-bold hover:bg-[#00dd00] transition-colors">
                  Enroll Now
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-[#00ff00]"></i>
                  <span>Full lifetime access</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-[#00ff00]"></i>
                  <span>Access on mobile and desktop</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-[#00ff00]"></i>
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Instructor</h2>
              <div className="flex items-center gap-4">
                <img
                  src="/profile.jpg"
                  //   alt={course.instructor}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{/* {course.instructor} */}test</h3>
                  <p className="text-gray-600">UPSC Expert</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Similar Courses</h2>
              <div className="space-y-4">
                {/* {suggestedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-bold">{course.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {course.instructor}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[#00ff00] font-bold">
                          {course.price}
                        </span>
                        <span className="text-sm text-gray-500">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
