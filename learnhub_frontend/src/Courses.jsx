import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/courses/")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Διαθέσιμα Μαθήματα</h2>
      <div className="text-2xl font-bold mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
