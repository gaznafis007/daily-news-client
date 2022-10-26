import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function loadCategory() {
      const url = "https://daily-news-server-zeta.vercel.app/categories";
      const res = await fetch(url);
      const data = await res.json();
      setCategories(data);
    }
    loadCategory();
    // fetch("https://daily-news-server-zeta.vercel.app/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h4>All Categories</h4>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
