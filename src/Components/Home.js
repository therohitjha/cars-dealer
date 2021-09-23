import React from "react";
import HeroBackground from "./HeroBackground";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import FeaturedCars from "./FeaturedCars";

const Home = () => {
  return (
    <>
      <HeroBackground>
        <Banner title="Cars Dealer" subtitle="Find Your Dream Car!">
          <Link
            to="/cars"
            className="btn-primary"
            style={{ padding: "10px", backgroundColor: "cornsilk" }}
          >
            Cars Collection
          </Link>
        </Banner>
      </HeroBackground>
      <Services />
      <FeaturedCars />
    </>
  );
};

export default Home;
