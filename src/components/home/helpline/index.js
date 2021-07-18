import React, {useState} from 'react'
import {Dropdown} from 'react-bootstrap'

import './style.css';
import '../../common.css';

import {_rows, _cols} from './_helpline';

const Helpline = () => {

    const [country, setCountry] = useState("");

    const renderDropdownItem = (data, index) => {
        return(
            <Dropdown.Item onClick={e => setCountry(data.country)} key={index}>
                {data.country}
            </Dropdown.Item>
        )
    }

    const renderHelplineColumns = (data, index) => {
        return(
            <th key={index}>
                {data}
            </th>
        )
    }

    const renderHelplineRows = (data, index) => {
        return(
            <tr key={index}>
                <td>
                    {data.name}
                </td>
                <td>
                    <div style={{overflowX: "auto"}}>
                    <table className="helpline-inner-table" style={{width: "100%"}}>
                        {data.contact.map(renderHelplineContact)}
                    </table>
                    </div>
                </td>
                <td>
                    {<a target="_blank" rel="noreferrer" href={data.link}>{data.link}</a>}
                </td>
                <td>
                    {data.location ? data.location : "-"}
                </td>
            </tr>
        )
    }

    const renderHelplineContact = (data, index) => {
        let operatingHours = ""
        if(data["24/7"]){
            operatingHours += "24/7";
        }
        else{
            let start = data.operatingStartHour;
            let end = data.operatingEndHour;
            let res = groupDate(start, end);
            for (const [key, value] of Object.entries(res)) {
                if(key==="closed"){
                    continue;
                }
                if(value.length === 7) {
                    operatingHours += "Mon-Sun: " + key + "\n"
                }
                else{
                    if(value.length === 1) {
                        operatingHours += value[0] + ": " + key + "\n"
                    }
                    else{
                        operatingHours += value[0] + "-" + value[value.length-1] + ": " + key + "\n"
                    }
                }
            }
        }
        return(
            <tr key={index}>
                <td>
                    {data.contactNumber}
                </td>
                <td>
                    {operatingHours}
                </td>
            </tr>
        )
    }

    function groupDate(startTime, endTime){
        let date =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let time = {};
        let opHr = "";
        for (let i = 0; i<startTime.length; i++){
            if (startTime[i] || endTime[i]){
                opHr = format12(startTime[i]) + "-" + format12(endTime[i])
            }
            else{
                opHr = "closed"
            }
        
            if(time[opHr]){
                time[opHr].push(date[i])
            }
            else{
                time[opHr] = [date[i]]
            }
        }   
        return time;
    }

    function format12(time) {
        let hh = time.substring(0, 2)
        let mm = time.substring(2, 4)
        let meridies = "AM"
        if (parseInt(hh) >= 12) {
          meridies = "PM"
        }
      
        if (parseInt(hh) > 12) {
          hh = parseInt(hh) - 12
        }

        if(hh === "00"){
            hh = 12;
        }
      
        return parseInt(hh) + ":" + mm + meridies
      }


    return(
        <div id="helpline" className="helpline common">
            <div className="container-fluid">
                <div className="row">
                    <div className="helpline-title">
                        <h2>
                            Find Help & Support near you
                        </h2>
                    </div>
                    <div className="col-lg-2">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                {country === "" ? "Select Country" : country}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {_rows.map(renderDropdownItem)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-lg-10">
                        {/* spacer */}
                    </div>
                </div>
                <div className="row">
                    <div className="helpline-content" style={{overflowX: "auto"}}>
                        <table className="helpline-table" style={{width: "100%"}}>
                            <tr>
                                {_cols.map(renderHelplineColumns)}
                            </tr>
                            {country !== "" && _rows.find(e => e.country === country).organisation.map(renderHelplineRows)}
                        </table>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helpline;
