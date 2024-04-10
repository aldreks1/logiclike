// CourseCardsList.tsx
import React from "react";
import CourseCard from "./CourseCard";

interface CourseCardsListProps {
  courses: Course[];
  selectedTag: string | null;
}

const CourseCardsList: React.FC<CourseCardsListProps> = ({
  courses,
  selectedTag,
}) => {
  const filteredCourses = selectedTag
    ? courses.filter((course) => course.tags.includes(selectedTag))
    : courses;

  return (
    <div className="courses">
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseCardsList;
