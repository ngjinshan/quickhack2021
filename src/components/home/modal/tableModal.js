import React from 'react';

import { Modal, Button } from 'react-bootstrap';

import './style.css';
import '../../common.css';

const TableModal = (props) => {
    const data = props.tableModalProps;
    
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {data.disorder}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe title="chart" src={data.link} width="100%" height="600px"></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default TableModal;
