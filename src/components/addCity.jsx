import axios from "axios";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { add_city_success } from "../redux/city/action";
import { add_country_success } from "../redux/country/action";

export default function AddCity() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  console.log(country);

  React.useEffect(() => {
    axios.get("http://localhost:8080/city").then((res) => {
      dispatch(add_city_success(res.data));
    });

    axios.get("http://localhost:8080/countries").then((res) => {
      dispatch(add_country_success(res.data));
    });
  }, []);

  const initial = {
    Cityname: "",
    Population: "",
    Country: "",
  };
  const [mycity, setmycity] = React.useState(initial);

  const handlechange = (e) => {
    const { value, name } = e.target;
    setmycity((prev) => ({ ...prev, [name]: value }));
  };

  const handleadd = (e) => {
    axios.post("http://localhost:8080/city", mycity).then((res) => {
      setmycity(initial);
    });
  };

  const { countries } = country;

  console.log(countries);

  const { Cityname, Population, Country } = mycity;
  return (
    <div>
      <input
        type="text"
        placeholder="city name"
        name="Cityname"
        onChange={handlechange}
        value={Cityname}
      />
      <input
        type="text"
        placeholder="Population"
        name="Population"
        onChange={handlechange}
        value={Population}
      />

      <select onChange={handlechange} name="Country" value={Country}>
        {countries.map((el) => (
          <option value={el.country}>{el.country}</option>
        ))}
      </select>

      <button onClick={handleadd}>ADD</button>
    </div>
  );
}
