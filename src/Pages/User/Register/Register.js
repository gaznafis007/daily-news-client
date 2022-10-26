import React, { useState } from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {
  const { signUp, logOut, verifyEmail, getProfile, setLoading } =
    useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const navigate = useNavigate();
  const handleTerms = (event) => {
    const checked = event.target.checked;
    setAccept(checked);
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imageURL = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
      .then((res) => {
        const user = res.user;
        getProfile(name, imageURL);
        verifyEmail();
        console.log(user);
        logOut();
        if (user.emailVerified) {
          navigate("/userAuth/login");
        } else {
          toast.error("Verify your email first");
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <Row>
        <Col lg="4" className="mx-auto p-2">
          <h2 className="mb-2">Sign up Now</h2>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter assword"
              />
              <Form.Text className="text-muted">
                We'll never share your email and passowrd with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Check
                onClick={handleTerms}
                label={
                  <>
                    Accept <Link> Terms and conditions</Link>
                  </>
                }
              ></Form.Check>
            </Form.Group>
            <Button
              className="mt-2"
              variant="primary"
              type="submit"
              disabled={!accept}
            >
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
