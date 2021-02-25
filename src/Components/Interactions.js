import React ,{useState} from 'react';
import "../Styles/Interactions.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Table from './Table'


const Interactions = () => {
  const [startDate,setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);



    return(
        <>
        <div className="container">
            <h1>Place Interactions</h1>
            <div className="date-picker">
            <DatePicker className='date' placeholderText="Start date"  selected={startDate} 
            onChange={ date1 => setstartDate(date1)}
            dateFormat='yyyy/MM/dd' />
            <br />
             <DatePicker className='date'
             placeholderText="End date"  selected={endDate} 
            onChange={ date2 => setendDate(date2)}
            dateFormat='yyyy/MM/dd' />
            </div>
            <Table />
        </div>
        
        </>
    );
}

export default Interactions;