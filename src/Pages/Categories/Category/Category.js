import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryNews from "../CategoryNews/CategoryNews";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h2 className="mb-4">
        There are {categoryNews.length} news in this category
      </h2>
      <div>
        {categoryNews.map((news) => (
          <CategoryNews key={news._id} news={news}></CategoryNews>
        ))}
      </div>
    </div>
  );
};

export default Category;
