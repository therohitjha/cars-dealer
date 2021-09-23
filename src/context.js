import React, { Component } from "react";
import carsData from "./data";

const CarContext = React.createContext();

class CarProvider extends Component {
  state = {
    cars: [],
    sortedCars: [],
    loading: true,
    type: "all",
    carMake: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0
  };

  componentDidMount() {
    let cars = this.formatData(carsData);
    let maxPrice = Math.max(...cars.map((car) => car.price));
    let maxSize = Math.max(...cars.map((car) => car.size));

    this.setState({
      cars,
      sortedCars: cars,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let car = { ...item.fields, images, id };
      return car;
    });

    return tempItems;
  };

  getCar = (slug) => {
    let tempCars = [...this.state.cars];
    const car = tempCars.find((tempCar) => tempCar.slug === slug);
    return car;
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterCars
    );
  };

  filterCars = () => {
    let { cars, price, type, carMake, minSize, maxSize } =
      this.state;
    let tempCars = [...cars];

    if (type !== "all") {
      tempCars = tempCars.filter((car) => car.type === type);
    }

    if (carMake !== "all") {
      tempCars = tempCars.filter((car) => car.carMake === carMake);
    }

    tempCars = tempCars.filter((car) => car.price <= price);

    tempCars = tempCars.filter(
      (car) => car.size >= minSize && car.size <= maxSize
    );

    this.setState({
      sortedCars: tempCars,
    });
  };

  render() {
    return (
      <CarContext.Provider
        value={{
          ...this.state,
          getCar: this.getCar,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </CarContext.Provider>
    );
  }
}

const CarConsumer = CarContext.Consumer;
export function withCarConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <CarConsumer>
        {(value) => <Component {...props} context={value} />}
      </CarConsumer>
    );
  };
}

export { CarProvider, CarConsumer, CarContext };
