import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const LoginMethods = () => {
  const { signInWithProvider } = useContext(AuthContext);
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const handleFacebookLogIn = () => {
    signInWithProvider(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleLogin = () => {
    signInWithProvider(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleFacebookLogIn}
          variant="outline-primary"
          className="mb-2"
        >
          <FaFacebook /> Log in with Facebook
        </Button>
        <Button onClick={handleGoogleLogin} variant="outline-success">
          <FaGoogle /> Log in with Google
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default LoginMethods;
