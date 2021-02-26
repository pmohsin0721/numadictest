import * as React from "react";
import '../Styles/Table.css'

const Table = (props) => {
   console.log(props.data);
   return(
      <>
      <table className="table" id="table-design">
                <tr className="row-design">
                    <th>Licence no.</th>
                    <th>Time</th>
                    <th>Coordinates</th>
                </tr>
                {
                    props.data.filter((val,idx) => (
                        idx < 10
                    )).map((value) => (
                        <tr>
                            <td>{value.license_number}</td>
                            <td>{value.time}</td>
                            <td><p>{`Latitude : ${value.latitude}`}</p> <p>{`Longitude : ${value.longitude}`}</p></td>
                        </tr>
                    ))
                }
            </table>

      </>
   );
}

export default Table;