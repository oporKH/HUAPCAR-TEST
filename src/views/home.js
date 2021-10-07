import React from 'react';

import AppHomecar from '../components/home/homeCar';
import AppCarList from '../components/home/CarList';
import CreateCar from '../components/home/create-car';



function AppHome() {
  return (
    <div className="main">
      <AppHomecar />
      <AppCarList />
      <CreateCar />
    </div>
  );
}

export default AppHome;