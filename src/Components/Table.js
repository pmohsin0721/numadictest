import React, { Component } from 'react'
import '../Styles/Table.css'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         vehicleData: [
            { LicenseNo : 1, Time : '2020/02/25 09:50', Coordinates: 'wasif@email.com' },
            
         ]
      }
   }
   renderTableData() {
    return this.state.vehicleData.map((vehicle, index) => {
       const { LicenseNo, Time, Coordinates } = vehicle
       return (
          <tr key={LicenseNo}>
             <td>{LicenseNo}</td>
             <td>{Time}</td>
             <td>{Coordinates}</td>
          </tr>
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.vehicleData[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
 render() {
    return (
       <div className="display-table">
          <table id='vehicleData'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default Table;