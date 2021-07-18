import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal, Button } from 'react-bootstrap';

import './style.css';
import '../../common.css';

const EventModal = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [link, setLink] = useState("")

    const submit = () => {
        console.log(name, email, contact, link)
        if(name==="" || link==="" || email==="" || contact===""){
            alert("Please fill up all fields");
        }
        else{
            alert("Submitted! Our staff will contact you shortly.")
            setName("")
            setEmail("")
            setContact("")
            setLink("")
            props.onHide()
        }
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
              Submit Event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="container">
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Company Name: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control className="input" type="text" value={name}
                            onChange={e => {setName(e.target.value)}}/>
                        </Col>
                    </Form.Group>
                  
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Event Link: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control className="input" type="text" value={link}
                             onChange={e => {setLink(e.target.value)}}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm ={2}>Email: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" value={email}
                             onChange={e => {setEmail(e.target.value)}}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm ={2}>Attachment: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Contact No.: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="tel" value={contact}
                             onChange={e => {setContact(e.target.value)}}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={10} style={{textAlign: "left"}}>
                        <span style={{color: "red", fontSize: "small", fontStyle: "italic"}}>Note: *required fields</span>
                        </Col>
                        <Col sm={2}>
                            <Button onClick={e=>{submit()}}>Submit</Button>
                        </Col>
                    </Form.Group>

                </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default EventModal;