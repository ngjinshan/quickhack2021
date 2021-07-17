import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Dropdown } from 'react-bootstrap';

import './style.css';

const Symptoms = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
    }));

    const classes = useStyles();

    const data = props.symptoms;

    const RenderCheckbox = (data,index) => {  
        return(
            <div key={index} className="col-lg-2" style={{border: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <label style={{textAlign: "left", width: "70%"}}>{data.name}</label>
                <input id={data.name} value={data.id} className="symptom-checkbox" type="checkbox" style={{width: "16px", height: "16px"}}></input>
            </div>
        )
    }

    return(
        <div className={classes.root} style={{visibility: `${props.hidden ? "hidden" : ""}`, display: `${props.hidden ? "none" : ""}`}}>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Symptoms</Typography>
                </AccordionSummary>
                <div className="container">
                    <div className="container">
                        <div className="row symptoms" style={{paddingBottom: "1%"}}>
                            {data.checkbox.map(RenderCheckbox)}
                        </div>
                    </div>
                </div>
            </Accordion>
        </div>
    )
}

export default Symptoms;