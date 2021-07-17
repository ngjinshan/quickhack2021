import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../../common.css';
import './style.css';

import {_facts} from './_facts';
import {_disorders} from './_disorders';
import {_rows, _cols} from './_chartTable';


import DisorderModal from '../modal/disorderModal';
import TableModal from '../modal/tableModal';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Factsheet = () => {
  const classes = useStyles();

  const [showDisorderModal, setShowDisorderModal] = useState(false);
  const [disorderModalProps, setDisorderModalProps] = useState();

  const [showTableModal, setShowTableModal] = useState(false);
  const [tableModalProps, setTableModalProps] = useState();

  const renderFacts = (fact, index) => {
    return(
      <li key={index}>
        {fact}
      </li>
    )
  }

  const renderDisorders = (disorder, index) => {
    console.log(disorder)
    return(
      <li key={index}>
        {/* <a style={{fontWeight: `${disorder.link ? "0" : "700"}`}} target="_blank" rel="noreferrer" href={disorder.link}>{disorder.name}:</a> {disorder.description} */}
        <span onClick={e => {setShowDisorderModal(true); setDisorderModalProps(disorder)}} style={{fontWeight:"700", cursor:"pointer", color: "#2162e6"}}>{disorder.name}</span>
        <br/>
        {disorder.shortDescription}
      </li>
    )
  }

  const renderTableColumns = (data, index) => {
    return(
        <th key={index}>
            {data}
        </th>
    )
}

  const renderTable = (row, index) => {
    return (
      <tr 
        onClick={()=> {
        if(row.disorder !== "Any mental health disorder"){
          setShowTableModal(true); setTableModalProps(row)
        }}}
        style={{cursor: `${row.disorder !== "Any mental health disorder" ? "pointer" : ""}`}}>
        <td>
          {row.disorder}
        </td>
        <td>
          {row.percentage} <br/>
          {row.countryDifference}
        </td>
        <td>
          {row.number}
        </td>
        <td>
          {row.malePercentage} <br/>
          {row.femalePercentage}
        </td>
      </tr>
    )
  }
  return (
    <div id="factsheet" className="common container factsheet" style={{paddingTop: "3%"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Facts on mental health</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
                {_facts.map(renderFacts)}
            </ul>
            <a style={{fontStyle: "italic"}} target="_blank" rel="noreferrer" href="https://www.who.int/news-room/facts-in-pictures/detail/mental-health">Source</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Mental disorders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
                {_disorders.map(renderDisorders)}
            </ul>
            <span style={{fontStyle: "italic"}}> 
            Sources:&nbsp;
            <a target="_blank" rel="noreferrer" href="https://www.singlecare.com/blog/news/mental-health-statistics/">Click here for more info</a>
            ,&nbsp;
            <a target="_blank" rel="noreferrer" href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders">Click here for more info</a>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Charts on Mental Health</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <table className="factsheet-table">
            <tr>
                {_cols.map(renderTableColumns)}
            </tr>
            {_rows.map(renderTable)}
            <span style={{fontStyle: "italic", marginTop: "20px"}}>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://ourworldindata.org/mental-health">Click here for more info</a>
            </span>
        </table>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>General factsheet by WHO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a target="_blank" rel="noreferrer" href="https://www.who.int/news-room/fact-sheets">Click here for more info</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {
        disorderModalProps &&
        <DisorderModal disorderModalProps={disorderModalProps} show={showDisorderModal} onHide={() => setShowDisorderModal(false)}></DisorderModal>
      }
      {
        tableModalProps &&
        <TableModal tableModalProps={tableModalProps} show={showTableModal} onHide={() => setShowTableModal(false)}></TableModal>
      }
    </div>
  );
}

export default Factsheet;
