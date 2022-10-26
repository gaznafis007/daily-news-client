import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const {
    title,
    _id,
    author,
    details,
    image_url,
    total_view,
    rating,
    category_id,
  } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="my-2 text-muted d-flex justify-content-evenly">
            <p>Author: {author.name}</p>
            <p>
              Rating: <FaStar className="text-warning" /> {rating.number}
            </p>
            <p>Publish Date: {author.published_date}</p>
          </Card.Subtitle>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">View in this category's news</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
