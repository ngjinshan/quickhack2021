import React, {useState} from 'react';
import Symptoms from './symptoms';

import { Dropdown } from 'react-bootstrap';

import {getToken } from '../../../api';

import './style.css';
import '../../common.css';

import {_symptoms} from '../../database/_symptoms';
// import {symptoms_2} from './_symptoms_2';
// import {getDiagosisUrl} from '../'
const Diagnosis = () => {

    // const [symptoms, setSymptoms] = useState();
    // const [diagnose, setDiagnose] = useState(false);
    // const [checked, setChecked] = useState();
    // const [countArray, setCountArray] = useState()
    const [gender, setGender] = useState();
    const [age, setAge] = useState();

    const [diagnosis, setDiagnosis] = useState({});
    const [showDiagnosis, setShowDiagnosis] = useState(false);

    // useEffect(()=>{
    //     let temp = []
    //     for(let i=0; i<_symptoms.length; i++){
    //         temp.push(0)
    //     }
    //     setCountArray(temp)
    // },[])

    // const renderAlphabets = (data, index) => {
    //     return(
    //         <span key={index} onClick={e => {
    //             if(data.checkbox.length>0){
    //                 // setSymptoms(data)
    //                 setDiagnose(false)
    //             }
    //         }} className="diagnosis-alphabet"
    //         style={{cursor: `${data.checkbox.length > 0 ? "pointer" : "no-drop"}`}}>
    //             {data.alphabet}
    //         </span>
    //     )
    // }

    // const renderSymptoms = (data, index) => {
    //     return(
    //         <React.Fragment key={index}>
    //             {
    //                 symptoms &&
    //                 <Symptoms setChecked={setChecked} setDiagnose={setDiagnose} hidden={symptoms.alphabet !== data.alphabet} symptoms={data}></Symptoms>
    //             }
    //         </React.Fragment>
    //     )
    // }

    // const getDiagnosis = (data, index) => {
    //     const intersection = checked.filter(element => data.PossibleSymptoms.includes(element));
    //     countArray[index] = intersection.length;
    //     if(index == symptoms.length-1){
    //         let max = Math.max(...countArray);
    //         console.log(max);
    //         // for(let i=0; i<symptoms.length; i++){
    //         //     console.log(symptoms[i].Name)
    //         // }
    //     }
    // }

    const diagnoseButton = async() => {
        setShowDiagnosis(false);

        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        let temp = [];
        for(let i=0; i<checkboxes.length; i++){
            // console.log(checkboxes[i].getAttribute("value"))
            temp.push(checkboxes[i].getAttribute("value"))
        }
        // setDiagnose(true);
        // setChecked(temp);
        // console.log(temp)
        // console.log(age)
        // console.log(gender)

        const baseUrl = "https://healthservice.priaid.ch"
        getToken().then(e => {
            // console.log(e)
            let url = baseUrl + "/diagnosis?symptoms=[" + temp + "]&gender=" + gender.toLowerCase() + "&year_of_birth=" + age + "&token=" + e + "&format=json&language=en-gb"
            // console.log(url)
            fetch(url)
            .then(response => {
                // console.log(response)
                return response.json()
            })
            .then(data => {
                // console.log(data); 
                if(data.length > 0) {
                    setDiagnosis({
                        "name" :data[0]['Issue']['Name']
                    });
                    let url2 = "https://healthservice.priaid.ch/issues/" + data[0]['Issue']['ID'] + "/info?token=" + e + "&format=json&language=en-gb"
                    fetch(url2)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        // console.log(data)
                        // console.log(diagnosis)
                        setDiagnosis({...data})
                        setShowDiagnosis(true)
                    })
                }
                else{
                    setDiagnosis({})
                    setShowDiagnosis(true);
                }
                return data
            });
        })

        // let res = await fetchDiagosis(temp, gender, age);
        // console.log(res);
    }

    const renderDiagnosis = () => {
        // console.log(diagnosis)

        if(Object.keys(diagnosis).length === 0){
            return(
                <div className="container">
                    <div className="row">
                        <p style={{textAlign: "left", fontStyle: "italic", color: "red"}}>
                            <em>
                                *Disclaimer: This may not be 100% accurate.
                                Please get diagnosed at your nearest clinic for further clarification.
                            </em>
                        </p>
                    </div>
                    <table className="diagnosis-table">
                        <tr>
                            <td>Name</td>
                            <td>Unknown Diagnosis</td>
                        </tr>
                    </table>
                </div>
            )
        }
        return(
            <div className="container">
                <div className="row">
                    <p style={{textAlign: "left", fontStyle: "italic", color: "red"}}>
                        <em>
                            *Disclaimer: This may not be 100% accurate.
                            Please get diagnosed at your nearest clinic for further clarification.
                        </em>
                    </p>
                </div>
                <table className="diagnosis-table">
                    <tr>
                        <td>Name</td>
                        <td>{diagnosis['Name']}</td>
                    </tr>
                    <tr>
                        <td>Medical Name</td>
                        <td>{diagnosis['ProfName']}</td>
                    </tr>
                    <tr>
                        <td>Short Description</td>
                        <td>{diagnosis['DescriptionShort']}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{diagnosis['Description']}</td>
                    </tr>
                    <tr>
                        <td>Treatment Description</td>
                        <td>{diagnosis['TreatmentDescription']}</td>
                    </tr>
                </table>
            </div>
        )
    }

    return(
        <div id="diagnosis" className="diagnosis common" style={{backgroundColor: "#f7f7f7", paddingTop: "5%", paddingBottom: "5%"}}>
            <div className="container">
                <div className="row diagnosis-title">
                    <h2 style={{paddingBottom: "0"}}>Mental Health Diagnosis</h2>
                    <p style={{paddingBottom: "1%"}}>Remember to check up on your friends regularly!</p>
                </div>
                {/* <div className="row diagnosis-alphabets">
                    {_symptoms.map(renderAlphabets)}
                </div> */}
            </div>
            <div className="container">
                {
                <   Symptoms symptoms={_symptoms}></Symptoms>
                }
            </div>
            <div className="container" style={{marginBottom: "1%", marginTop: "1%"}}>
                <div className="row">
                    <div className="col-lg-2" style={{display: "flex", justifyContent: "start"}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
                        <input onChange={e => setAge(e.target.value)} type="number"></input>
                    </div>
                </div>
            </div>
            <div className="container justify-content-start" style={{display: "flex", marginBottom: "1%"}}>
                <button disabled={!age || !gender} style={{padding: "8px", borderRadius: "6px", marginTop: "1%"}} onClick={e => diagnoseButton()}>Diagnose</button>
            </div>
            <div className="container">
                {
                    showDiagnosis && renderDiagnosis()
                }
            </div>
        </div>
    )
}

export default Diagnosis;