import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'

export default function DisplayCity() {
    const dispatch =useDispatch()

    const cities = useSelector((state)=>state.city)

    const {city} =cities;

  return (
    <div>
       <table>

<tbody>
    <tr>
        <th>Country</th>
        <th>City</th>
        <th>Population</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
{city.map((el)=><tr>
    <td>{el.Country}</td>
    <td>{el.Cityname}</td>
    <td>{el.Population}</td>
    <td>edit</td>
    <td>delete</td>
</tr>)}
</tbody>

       </table>
    </div>
  )
}
