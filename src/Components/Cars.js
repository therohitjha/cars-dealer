import React from "react";
import HeroBackground from "./HeroBackground";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import CarsContainer from "./CarsContainer";

const Cars = () => {
  return (
    <>
      <HeroBackground hero="carsHero">
        <Banner title="Our Cars">
          <Link
            to="/cars-dealer"
            className="btn-primary"
            style={{ padding: "10px", backgroundColor: "cornsilk" }}
          >
            Return home
          </Link>
        </Banner>
      </HeroBackground>
      <CarsContainer />
    </>
  );
};

export default Cars;
