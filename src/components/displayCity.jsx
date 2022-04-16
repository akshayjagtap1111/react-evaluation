import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { add_city_success, delete_city } from "../redux/city/action";
import { add_country_success } from "../redux/country/action";

export default function DisplayCity() {

    React.useEffect(()=>{
        axios.get("http://localhost:8080/city").then((res)=>{
            dispatch(add_city_success(res.data))
        })

        axios.get("http://localhost:8080/countries").then((res)=>{
            dispatch(add_country_success(res.data))
        })
      },[])
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.city);


  let { city } = cities;


 

const [datatoshow,setdatatoshow] = React.useState(city)
const [temp,settemp] = React.useState(5)




  const handleAsc = () => {

    setdatatoshow(city.sort((a,b)=>a.Population-b.Population))
    settemp(Math.random())

  };

  const handleDec = () => {
    setdatatoshow(city.sort((a,b)=>b.Population-a.Population))
    settemp(Math.random())
  };

  const sort_country=()=>{
    city.sort((a,b)=>b.Population-a.Population)
  }

  const handledelete =(id)=>{

    axios.delete(`http://localhost:8080/city/${id}`).then(()=>{
        dispatch(delete_city(id))
        axios.get("http://localhost:8080/city").then((res)=>{
            dispatch(add_city_success(res.data))
        })
    })

  }

  const [filt, setfilt] =React.useState("");

  const applyfilter =()=>{
    
  city=city.filter((el)=>{return el.Country===filt })
  console.log(city)
  settemp(Math.random())
  }

  console.log("rerendered")

  return (
    <div>

        <div>
        <label>sort by population</label>
      <button onClick={handleAsc}>asc</button>
      <button onClick={handleDec}>des</button>
      <br></br>
      <input type="text" onChange={(e)=>{setfilt(e.target.value)}} />
      <button onClick={applyfilter}>filter by country</button>
        </div>
        <div  id="displaydiv">

        <table>
        <tbody>
          <tr>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {city.map((el) => (
            <tr>
              <td>{el.Country}</td>
              <td>{el.Cityname}</td>
              <td>{el.Population}</td>
              <td>edit</td>
              <td onClick={()=>{handledelete(el.id)}}>delete</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      

      
    </div>
  );
}
