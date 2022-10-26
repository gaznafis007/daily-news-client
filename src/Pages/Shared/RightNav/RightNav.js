import React from "react";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import FindUs from "../FindUs/FindUs";
import LoginMethods from "../LoginMethods/LoginMethods";

const RightNav = () => {
  return (
    <div>
      <LoginMethods></LoginMethods>
      <h4 className="my-4">Find us on</h4>
      <div className="mb-2">
        <FindUs />
      </div>

      <BrandCarousel />
    </div>
  );
};

export default RightNav;
