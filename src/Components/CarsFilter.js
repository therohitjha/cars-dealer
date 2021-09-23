import React from "react";
import { useContext } from "react";
import { CarContext } from "../context";
import Title from "./Title";

const uniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const CarsFilter = ({ cars }) => {
  const context = useContext(CarContext);
  const { handleChange, type, carMake, price, minPrice, maxPrice } = context;

  let types = uniqueValues(cars, "type");

  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let manufacturers = uniqueValues(cars, "carMake");
  manufacturers = ["all", ...manufacturers];

  manufacturers = manufacturers.map((manufacturer, index) => {
    return (
      <option key={index} value={manufacturer}>
        {manufacturer}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Cars" style={{ color: "black" }} />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="price">
            Filter By Price ₹{price}
            <input
              onChange={handleChange}
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="type">Car Types</label>
          <select
            onChange={handleChange}
            name="type"
            id="type"
            value={type}
            className="form-control"
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="carMake">Brands</label>
          <select
            onChange={handleChange}
            name="carMake"
            id="carMake"
            value={carMake}
            className="form-control"
          >
            {manufacturers}
          </select>
        </div>
      </form>
    </section>
  );
};

export default CarsFilter;
