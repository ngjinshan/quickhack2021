import React, {useEffect, useState} from 'react'
import {Dropdown} from 'react-bootstrap'

import './style.css';
import '../../common.css';

import {data, dataStructure} from './_data';

const Helpline = () => {

    const renderDropdownItem = (data, index) => {
        return(
            <Dropdown.Item onClick={e => console.log("test")} key={index}>
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
                    <table className="helpline-inner-table">
                        {data.contact.map(renderHelplineContact)}
                    </table>
                </td>
                <td>
                    {data.link}
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
            operatingHours = "Open 24 hours 7 days a week";
        }
        else{
            
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


    return(
        <div className="helpline common">
            <div className="container">
                <div className="row">
                    <div className="helpline-title">
                        <h2>
                            Find Help & Support near you
                        </h2>
                    </div>
                    <div className="col-lg-2">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Country
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {data.map(renderDropdownItem)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-lg-10">
                        {/* spacer */}
                    </div>
                </div>
                <div className="row">
                    <div className="helpline-content">
                        <table className="helpline-table">
                            <tr>
                                {dataStructure.map(renderHelplineColumns)}
                            </tr>
                            {data.find(e => e.country === "Australia").organisation.map(renderHelplineRows)}
                        </table>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helpline;
