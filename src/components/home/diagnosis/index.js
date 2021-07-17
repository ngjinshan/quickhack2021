import React, {useEffect, useState} from 'react';
import Symptoms from './symptoms';

import { Dropdown } from 'react-bootstrap';

import { fetchDiagosis, getToken } from '../../../api';

import './style.css';
import '../../common.css';

import {_symptoms} from './_symptoms';
import {symptoms_2} from './_symptoms_2';
// import {getDiagosisUrl} from '../'
const Diagnosis = () => {

    const [symptoms, setSymptoms] = useState();
    const [diagnose, setDiagnose] = useState(false);
    const [checked, setChecked] = useState();
    const [countArray, setCountArray] = useState()
    const [gender, setGender] = useState();
    const [age, setAge] = useState();

    const [diagnosis, setDiagnosis] = useState("");

    // useEffect(()=>{
    //     let temp = []
    //     for(let i=0; i<_symptoms.length; i++){
    //         temp.push(0)
    //     }
    //     setCountArray(temp)
    // },[])

    const renderAlphabets = (data, index) => {
        return(
            <span key={index} onClick={e => {
                if(data.checkbox.length>0){
                    setSymptoms(data)
                    setDiagnose(false)
                }
            }} className="diagnosis-alphabet"
            style={{cursor: `${data.checkbox.length > 0 ? "pointer" : "no-drop"}`}}>
                {data.alphabet}
            </span>
        )
    }

    const renderSymptoms = (data, index) => {
        return(
            <React.Fragment key={index}>
                {
                    symptoms &&
                    <Symptoms setGender={setGender} gender={gender} setAge={setAge} age={age} setChecked={setChecked} setDiagnose={setDiagnose} hidden={symptoms.alphabet !== data.alphabet} symptoms={data}></Symptoms>
                }
            </React.Fragment>
        )
    }

    const getDiagnosis = (data, index) => {
        // const intersection = checked.filter(element => data.PossibleSymptoms.includes(element));
        // countArray[index] = intersection.length;
        // if(index == symptoms.length-1){
        //     let max = Math.max(...countArray);
        //     console.log(max);
        //     // for(let i=0; i<symptoms.length; i++){
        //     //     console.log(symptoms[i].Name)
        //     // }
        // }
    }

    const diagnoseButton = async() => {
        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        let temp = [];
        for(let i=0; i<checkboxes.length; i++){
            console.log(checkboxes[i].getAttribute("value"))
            temp.push(checkboxes[i].getAttribute("value"))
        }
        setDiagnose(true);
        // setChecked(temp);
        console.log(temp)
        console.log(age)
        console.log(gender)

        const baseUrl = "https://healthservice.priaid.ch"
        getToken().then(e => {
            console.log(e)
            let url = baseUrl + "/diagnosis?symptoms=[" + temp + "]&gender=" + gender.toLowerCase() + "&year_of_birth=" + age + "&token=" + e + "&format=json&language=en-gb"
            // console.log(url)
            fetch(url)
            .then(response => {
                // console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data); 
                setDiagnosis(data[0]['Issue']['Name']);
                return data
            });
        })

        // let res = await fetchDiagosis(temp, gender, age);
        // console.log(res);
    }

    return(
        <div id="diagnosis" className="diagnosis common">
            <div className="container" style={{marginBottom: "1%"}}>
                <div className="row diagnosis-title">
                    <h4>Self Diagnosis</h4>
                </div>
                <div className="row diagnosis-alphabets">
                    {_symptoms.map(renderAlphabets)}
                </div>
            </div>
            <div className="container">
                {_symptoms.map(renderSymptoms)}
            </div>
            <div className="container" style={{marginBottom: "1%", marginTop: "1%"}}>
                <div className="row">
                    <div className="col-lg-2" style={{display: "flex", justifyContent: "start"}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {gender ? gender : "Select Gender"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={e => setGender("Male")}>
                                Male
                            </Dropdown.Item>
                            <Dropdown.Item onClick={e => setGender("Female")}> 
                                Female
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className="col-lg-10" style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                        <label>Enter Age:&nbsp;&nbsp;</label>
                        <input onChange={e => setAge(e.target.value)} type="text"></input>
                    </div>
                </div>
            </div>
            <div className="container justify-content-start" style={{display: "flex", marginBottom: "1%"}}>
                <button disabled={!age || !gender} style={{padding: "8px", borderRadius: "6px", marginTop: "1%"}} onClick={e => diagnoseButton()}>Diagnose</button>
            </div>
            <div className="container">
                {
                    <p>
                        {diagnosis}
                    </p>
                }
            </div>
        </div>
    )
}

export default Diagnosis;