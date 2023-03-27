import LandingPage from "./components/LandingPage";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [vehicles, setVehicles] = useState([]);
  const filterVehicles = (gotData) => {
    const data = gotData
    let filteredData = [];
    for (let i of data){
      if(i.VehicleTypes.length && i.Country && i.Mfr_CommonName){
        for(let j of i.VehicleTypes){
          if(j.IsPrimary){
            i.type = j.Name;
            filteredData.push(i);
            break;
          }
        }
      }
    }
    return filteredData;
  }
  useEffect(()=>{
      axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json`).then(res=>{
          setVehicles(filterVehicles(res.data.Results));
      })
  },[])
  return (
    <div className="vehicleManufacturerCatalog">
    <LandingPage vehicles={vehicles} />
    </div>
  );
}

export default App;
