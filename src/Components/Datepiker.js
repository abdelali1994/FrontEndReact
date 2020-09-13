import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export  function Datepinker() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
    <div className="form-group">
    <label htmlFor="dateDebut" className="mr-3">Date Début</label>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
       
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
    </div>
    <div className="form-group">
    <label htmlFor="dateFin" className="mr-3">Date Fin</label>
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
    
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
    </>

    
    )
}
