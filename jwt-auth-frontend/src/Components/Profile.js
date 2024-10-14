import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Dummy course data
  const initialCourses = [
    {
      id: 1,
      title: 'JavaScript Essentials',
      description: 'Learn the fundamentals of JavaScript, the language of the web.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'HTML & CSS Basics',
      description: 'A comprehensive course on building websites with HTML and CSS.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'MERN Stack Development',
      description: 'Full-stack web development using MongoDB, Express.js, React, and Node.js.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'React Fundamentals',
      description: 'An introduction to React and its core concepts.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Node.js for Beginners',
      description: 'Learn server-side JavaScript with Node.js.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', image: '' });
  const [editingCourseId, setEditingCourseId] = useState(null);

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleAddCourse = () => {
    const updatedCourses = [
      ...courses,
      { id: courses.length + 1, ...newCourse },
    ];
    setCourses(updatedCourses);
    setNewCourse({ title: '', description: '', image: '' });
  };

  const handleEditCourse = (course) => {
    setNewCourse(course);
    setEditingCourseId(course.id);
  };

  const handleUpdateCourse = () => {
    const updatedCourses = courses.map((course) =>
      course.id === editingCourseId ? { ...course, ...newCourse } : course
    );
    setCourses(updatedCourses);
    setNewCourse({ title: '', description: '', image: '' });
    setEditingCourseId(null);
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Courses Enrolled</h1>
          <p className="text-gray-600 mt-2">Explore the courses you are pursuing</p>
        </header>

        <div className="mt-16 text-center">
          <Link to="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
            Go to Dashboard
          </Link>
        </div>

        <section className="my-6">
          <h2 className="text-2xl font-bold mb-4">Add a New Course</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              value={newCourse.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full mb-2"
            />
            <input
              type="text"
              name="description"
              placeholder="Course Description"
              value={newCourse.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full mb-2"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newCourse.image}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full mb-2"
            />
          </div>
          <div className="flex justify-center">
            {editingCourseId ? (
              <button onClick={handleUpdateCourse} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">Update Course</button>
            ) : (
              <button onClick={handleAddCourse} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Add Course</button>
            )}
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.length === 0 ? (
              <div className="text-center text-gray-600">No courses enrolled yet.</div>
            ) : (
              courses.map((course) => (
                <div key={course.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:scale-105">
                  <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                  <div className="mt-4 flex justify-between">
                    <button onClick={() => handleEditCourse(course)} className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-2 rounded-md">Edit</button>
                    <button onClick={() => handleDeleteCourse(course.id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md">Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
