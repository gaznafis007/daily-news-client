import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryNews from "../Categories/CategoryNews/CategoryNews";

const AllNews = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.map((singleNews) => (
        <CategoryNews key={singleNews._id} news={singleNews}></CategoryNews>
      ))}
    </div>
  );
};

export default AllNews;
