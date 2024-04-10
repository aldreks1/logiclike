// CourseCard.tsx
import React from "react";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course">
      <div className="imageHolder" style={{ backgroundColor: course.bgColor }}>
        <img src={course.image} alt={course.name} />
      </div>
      <h3>{course.name}</h3>
    </div>
  );
};

export default CourseCard;
