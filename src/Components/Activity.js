import React ,{useState} from 'react';
import "../Styles/Activity.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const Activity = () => {
  const [startDate,setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);



    return(
        <>
        <div className="container">
            <h1 className="heading">Vehicle Activity</h1>
            <div className="date-picker">
               <input type="text" className="input-license" placeholder="License Number" />
                
            <DatePicker className='date' placeholderText="Start Date" selected={startDate} 
            onChange={ date1 => setstartDate(date1)}
            dateFormat='yyyy/MM/dd' />
         
            <br />
           
             <DatePicker className='date'
             placeholderText="End Date"
               selected={endDate} 
            onChange={ date2 => setendDate(date2)}
            dateFormat='yyyy/MM/dd' />
        
            <button className="search-button-2">search</button>
            </div>
            
            
        </div>
        
        </>
    );
}

export default Activity;