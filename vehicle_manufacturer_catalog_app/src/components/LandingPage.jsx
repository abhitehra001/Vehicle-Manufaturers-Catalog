import {  useEffect, useState } from "react";
import Vehicle from "./Vehicle";
import "../styles/landingPage.css";


const LandingPage = ({vehicles}) => {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");
    return <section id="catalogContainer">
    <header>
        <h1>Vehicle Manufacturers</h1>
        <div>
            <div id="searchContainer">
                <label htmlFor="searchVehicle">Search</label>
                <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            </div>
            <div id="filterContainer">
                <label htmlFor="vehicleType">Filter by Vehicle Type</label>
                <select name="vehicleType" id="vehicleType" onChange={(e)=>{
                    setFilter(e.target.value);
                }}>
                    <option value="All">All</option>
                    <option value="Passenger Car">Passenger Car</option>
                    <option value="Truck">Truck</option>
                    <option value="Multipurpose Passenger Vehicle (MPV)">Multipurpose Passenger Vehicle (MPV)</option>
                    <option value="Motorcycle">Motorcycle</option>
                    <option value="Trailer">Trailer</option>
                    <option value="Low Speed Vehicle (LSV)">Low Speed Vehicle (LSV)</option>
                    <option value="Off Road Vehicle">Off Road Vehicle</option>
                    <option value="Bus">Bus</option>
                    <option value="Incomplete Vehicle">Incomplete Vehicle</option>
                </select>
            </div>
        </div>
    </header>
    <table>
        <thead id="vehicleHeaders">
            <tr>
                <th>Name</th>
                <th>Counter</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody id="vehicleContainer">
        {
            vehicles.length>0 ? vehicles.map((vehicle,index)=>{
                return <Vehicle key={index} vehicle={vehicle} filter={filter} search={search} />
            }) : <></>
        }
        </tbody>
    </table>
    </section>
}

export default LandingPage;