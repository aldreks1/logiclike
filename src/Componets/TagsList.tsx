// TagsList.tsx
import React from "react";

interface TagsListProps {
  courses: Course[];
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const TagsList: React.FC<TagsListProps> = ({
  courses,
  selectedTag,
  setSelectedTag,
  setCurrentPage,
}) => {
  return (
    <div className="tags">
      <ul>
        <li
          className={!selectedTag ? "active" : ""}
          onClick={() => {
            setSelectedTag(null);
            setCurrentPage(1);
          }}
        >
          Все темы
        </li>
        {Array.from(new Set(courses.flatMap((course) => course.tags))).map(
          (tag) => (
            <li
              key={tag}
              className={tag === selectedTag ? "active" : ""}
              onClick={() => {
                setSelectedTag(tag === selectedTag ? null : tag);
                setCurrentPage(1);
              }}
            >
              {tag}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TagsList;
