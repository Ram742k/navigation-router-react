import React from 'react';
import CourseCard from '../components/CourseCard';

const allCourses = [
  { title: 'Full Stack Development Course', image: 'https://oilab.in/public/img/courses/full-stack-web-developer.jpg' },
  { title: 'Data Science Course', image: 'https://www.thinknexttraining.com/images/data-science-course-in-chandigarh-mob.jpg' },
  { title: 'Cyber Security Course', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnSh3MaNbIHEduN9JbGdJKLFzdeKjwtAibQ&s' },
  { title: 'Career Guidance', image: 'https://t3.ftcdn.net/jpg/04/19/47/86/360_F_419478658_hEFEvZGCqg2NxRGGbuqVFZQY4H7rVk92.jpg' },
  // Add more courses as needed
];

const AllCourses = () => {
  return (
    <div>
      <h2>All Courses</h2>
      <div className="course-list">
        {allCourses.map((course, index) => (
          <CourseCard key={index} title={course.title} image={course.image} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
