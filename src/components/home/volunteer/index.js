import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Volunteer = () => {
    return(
        <div id="volunteer">
            <h2>
                Ready to Help?
            </h2>
            <p>
                Fill up the form below and we will contact you as soon as possible!
            </p>
            <div className="container">
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Name: </Form.Label>
                        <Col sm={9}>
                            <Form.Control className="input" type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>NRIC No.: </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Gender: </Form.Label>
                        <Col sm={9} style={{display:"flex"}}>
                            <Form.Check 
                                label="Male"
                                inline
                                name="gender"
                                type="radio"
                            />
                            <Form.Check
                                label="Female"
                                inline
                                name="gender"
                                type="radio"
                            />
                            <Form.Check
                                label="Prefer Not to Say"
                                inline
                                name="gender"
                                type="radio"
                            />  
                        </Col>
                    </Form.Group>
                    

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Address: </Form.Label>
                        <Col sm={9}>
                            <Form.Control className="input" type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm ={2}>Email: </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Contact No.: </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="tel"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{span:10, offset:1}}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            
        </div>
    )
}

export default Volunteer;