import * as React from "react";
import '../Styles/Table.css'
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "LicenseNumber", headerName: "License Number", width: 200 },
  { field: "Time", headerName: "Time", width: 200 },
  { field: "Coordinates", headerName: "Coordinates",width: 250}
];

const rows = [
  { id: 1, LicenseNumber: "Snow", Time: "Jon", Coordinates: 35 },
  { id: 2, LicenseNumber: "Lannister", Time: "Cersei", Coordinates: 42 },
  { id: 3, LicenseNumber: "Lannister", Time: "Jaime", Coordinates: 45 },
  { id: 4, LicenseNumber: "Stark", Time: "Arya", Coordinates: 16 },
  { id: 5, LicenseNumber: "Targaryen", Time: "Daenerys", Coordinates: null },

];

export default function Table() {
  return (
    <div className="table-design" style={{ height: 400, width: "65.5%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={7} />
    </div>
  );
}
