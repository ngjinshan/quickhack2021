import React from 'react';

import { Modal, Button } from 'react-bootstrap';

import './style.css';
import '../../common.css';

const DisorderModal = (props) => {
    const data = props.disorderModalProps;

    console.log(data)
    const renderList = (data, index) => {
        return(
            <li>
                {data}
            </li>
        )
    }
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {data.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 style={{fontSize: "larger"}}>What is {data.name}?</h4>
            <p>
            {data.longDescription}
            </p>
            <h4 style={{fontSize: "larger"}}>Symptoms</h4>
            <ul>
                {data.symptoms.map(renderList)}
            </ul>
            <h4 style={{fontSize: "larger"}}>Causes</h4>
            <ul>
                {data.causes.map(renderList)}
            </ul>
          </Modal.Body>
          <Modal.Footer style={{justifyContent: "space-between"}}>
            <a style={{fontStyle: "italic"}} target="_blank" rel="noreferrer" href={data.link}>For more info</a>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default DisorderModal;