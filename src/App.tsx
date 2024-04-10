// App.tsx
import React, { useState, useEffect } from "react";
import "./styles.scss";
import TagsList from "./Componets/TagsList";
import CourseCardsList from "./Componets/CourseCardsList";
import MyLoader from "./Componets/MyLoader";
import Pagination from "./Componets/Pagination";

const fetchCourses = () => {
  return fetch("https://logiclike.com/docs/courses.json").then((response) =>
    response.json()
  );
};

const ITEMS_PER_PAGE = 6;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setIsLoading(true);
    fetchCourses()
      .then((data) => {
        setCourses(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(
    (selectedTag
      ? courses.filter((course) => course.tags.includes(selectedTag))
      : courses
    ).length / ITEMS_PER_PAGE
  );

  const visibleCourses = selectedTag
    ? courses
        .filter((course) => course.tags.includes(selectedTag))
        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    : courses.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      );

  return (
    <div className="app">
      <div className="container">
        {isLoading ? (
          <MyLoader />
        ) : (
          <>
            <TagsList
              courses={courses}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              setCurrentPage={setCurrentPage}
            />
            <CourseCardsList
              courses={visibleCourses}
              selectedTag={selectedTag}
            />
          </>
        )}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
