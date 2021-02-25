import React, { Component } from 'react'
import '../Styles/Table.css'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         vehicleData: [
            { LisenceNo : 1, Time : 'Wasif', Coordinates: 'wasif@email.com' },
            
         ]
      }
   }
   renderTableData() {
    return this.state.vehicleData.map((vehicle, index) => {
       const { LisenceNo, Time, Coordinates } = vehicle
       return (
          <tr key={LisenceNo}>
             <td>{LisenceNo}</td>
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