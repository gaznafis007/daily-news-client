import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaSnapchat,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item className="mb-2">
          <FaFacebook /> Facebook
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaTwitter /> Twitter
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaWhatsapp /> Whatsapp
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaTwitch /> Twitch
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaSnapchat /> Snapchat
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FindUs;
