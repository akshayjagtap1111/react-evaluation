import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { add_city_success } from "../redux/city/action";
import { add_country_failure, add_country_success } from "../redux/country/action";

export default function AddCountry() {
    const dispatch = useDispatch()
  const initstate = {
    country: "",
  };
  const [cont, setcity] = React.useState(initstate);

  const handeladd = (e) => {
    const { value } = e.target;
    setcity((prev) => ({ ...prev, country: value }));
  };

  const handlesubmit = (e) => {
    axios.post("http://localhost:8080/countries", cont).then(()=>{
        
        dispatch(add_country_success(cont.country))
        console.log(".then")
    }).catch((err)=>{
        alert("check your action object")
        dispatch(add_country_failure)
        console.log(".catch")
    });
  };
  const { country } = cont;
  return (
    <div>
      <input
        type="text"
        placeholder="ADD COUNTRY"
        value={country}
        onChange={handeladd}
      />
      <button onClick={handlesubmit}>ADD</button>
    </div>
  );
}
