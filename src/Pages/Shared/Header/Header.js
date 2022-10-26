import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import LeftNav from "../LeftNav/LeftNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const userSignOut = () => {
    logOut();
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="mb-4"
      >
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: "none" }} to="/">
              Daily News
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link style={{ textDecoration: "none" }} to="/news">
                  All news
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">Events</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {user?.displayName || <p>Welcome</p>}
              </Nav.Link>
              <Nav.Link eventKey={2}>
                {user?.photoURL ? (
                  <Image
                    roundedCircle
                    style={{ height: "30px" }}
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser />
                )}
              </Nav.Link>
              {user?.uid ? (
                <Button size="sm" onClick={userSignOut}>
                  Sign out
                </Button>
              ) : (
                <div className="mt-2">
                  <Link
                    className="me-2 text-decoration-none"
                    to="/userAuth/register"
                  >
                    Register
                  </Link>
                  <Link className="text-decoration-none" to="/userAuth/login">
                    Log in
                  </Link>
                </div>
              )}
            </Nav>
            <Nav.Item className="d-lg-none">
              <LeftNav />
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
