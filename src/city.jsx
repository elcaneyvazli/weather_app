import React from "react";

const city = ({ city }) => {
  console.log(city);

  return (
    <div>
      <div>
        <h1 className="text-[5rem] text-white place-content-center mx-auto text-center">{city.main.temp} °C</h1>
        <h1 className="text-[5rem] text-white place-content-center mx-auto text-center">{city.name}</h1>
        <h1 className="text-[5rem] text-white place-content-center mx-auto text-center">{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default city;
