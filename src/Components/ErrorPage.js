import React from "react";
import HeroBackground from "./HeroBackground";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <HeroBackground>
      <Banner title="404" subtitle="Oops, page not found">
        <Link
          to="/cars-dealer"
          className="btn-primary"
          style={{ padding: "10px", backgroundColor: "cornsilk" }}
        >
          Return Home
        </Link>
      </Banner>
    </HeroBackground>
  );
};

export default ErrorPage;
