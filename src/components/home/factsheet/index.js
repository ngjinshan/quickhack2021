import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../../common.css';
import './style.css';

import {facts} from './_facts';
import {disorders} from './_disorders';
import {rows} from './_chartTable';


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

  const renderFacts = (fact, index) => {
    return(
      <li key={index}>
        {fact}
      </li>
    )
  }

  const renderDisorders = (disorder, index) => {
    return(
      <li key={index}>
        <a style={{fontWeight: `${disorder.link ? "0" : "700"}`}} target="_blank" rel="noreferrer" href={disorder.link}>{disorder.name}:</a> {disorder.description}
      </li>
    )
  }

  const renderTable = (row, index) => {
    return (
      <tr>
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
                {facts.map(renderFacts)}
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
                {disorders.map(renderDisorders)}
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
          <Typography className={classes.heading}>Charts on Mental Health (Table)</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <table className="factsheet-table">
            <tr>
                <th>Disorder</th>
                <th>Share of global population with disorder (2017) [difference across countries]</th>
                <th>Number of people with the disorder (2017)</th>
                <th>Share of males:females with disorder (2017)</th>
            </tr>
            {rows.map(renderTable)}
        </table>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Charts on Mental Health (Globe)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          TODO // cant find 2020 stats
        {/* <table className="factsheet-table">
            <tr>
                <th>Disorder</th>
                <th>Share of global population with disorder (2017) [difference across countries]</th>
                <th>Number of people with the disorder (2017)</th>
                <th>Share of males:females with disorder (2017)</th>
            </tr>
            <tr>
                <td>Any mental health disorder</td>
                <td>10.7%</td>
                <td>792 million</td>
                <td>9.3 males% <br/> 11.9% females</td>
            </tr>
        </table> */}
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
    </div>
  );
}

export default Factsheet;
