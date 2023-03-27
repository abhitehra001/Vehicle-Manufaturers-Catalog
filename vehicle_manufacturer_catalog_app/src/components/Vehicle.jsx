import axios from "axios";
import Swal from "sweetalert2";
import "../styles/vehicle.css";

const Vehicle = ({ vehicle, filter, search}) => {
    return <>{
    (search==="" || vehicle.Mfr_CommonName.toLowerCase().includes(search.toLowerCase())) && (filter==="All" || filter===vehicle.type) ?
    <tr id="vehicleBox" onClick={()=>{
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/${vehicle.Mfr_ID}?format=json`).then(res=>{
            let title = "";
            let name = "";
            let address = "";
            let state = "";
            if(res.data.Results[0].Mfr_Name){
                title = res.data.Results[0].Mfr_Name;
            }
            if(res.data.Results[0].PrincipalFirstName){
                name += res.data.Results[0].PrincipalFirstName;
            }
            if(res.data.Results[0].PrincipalLastName){
                name += " "+res.data.Results[0].PrincipalLastName;
            }
            if(res.data.Results[0].Address){
                address = res.data.Results[0].Address;
            }else if(res.data.Results[0].Address2){
                address = res.data.Results[0].Address2;
            }
            if(res.data.Results[0].StateProvince){
                state = res.data.Results[0].StateProvince;
            }
            Swal.fire({
                titleText: title,
                html: `<p>${name}</p><p>${address}</p><p>${state}<p>`,
                showConfirmButton: false,
                showCloseButton: true,
            })
        })
    
    }}>
        <td>{vehicle.Mfr_CommonName}</td>
        <td>{vehicle.Country}</td>
        <td>{vehicle.type}</td>
    </tr>
    : 
    <></>
    }</>
}

export default Vehicle;