import React, { Component } from "react";
import { CarContext } from "../context";
import Loading from "./Loading";
import Car from "./Car";
import Title from "./Title";
import Slider from "react-slick";

export default class FeaturedCars extends Component {
  static contextType = CarContext;

  render() {
    let { loading, cars } = this.context;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className="featured-cars">
        <Title title="Featured Cars" />
        <div className="featured-cars-center">
          {loading ? (
            <Loading />
          ) : (
            <Slider {...settings}>
              {cars.map((car) => {
                return <Car key={car.id} car={car} />;
              })}
            </Slider>
          )}
        </div>
      </section>
    );
  }
}
