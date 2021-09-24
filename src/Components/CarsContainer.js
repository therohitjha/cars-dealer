import React, { Suspense, lazy } from "react";
import CarsFilter from "./CarsFilter";
import { withCarConsumer } from "../context";
import Loading from "./Loading";
const CarsList = lazy(() => import("./CarsList"));

function CarsContainer({ context }) {
  const { loading, sortedCars, cars } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarsFilter cars={cars} />
      <CarsList cars={sortedCars} />
    </Suspense>
  );
}

export default withCarConsumer(CarsContainer);
