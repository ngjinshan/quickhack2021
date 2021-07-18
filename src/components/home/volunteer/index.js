import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Volunteer = () => {

    const [name, setName] = useState("")
    const [ic, setIc] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")

    const submit = () => {
        console.log(name, ic, gender, address, email, contact)
        if(name==="" || ic==="" || gender==="" || address==="" || email==="" || contact===""){
            alert("Please fill up all fields");
        }
        else{
            alert("Submitted! Our staff will contact you shortly")
            setName("")
            setIc("")
            setGender("")
            setAddress("")
            setEmail("")
            setContact("")
        }
    }
    return(
        <div id="volunteer">
            <h2 style={{paddingBottom: "0"}}>
                Ready to Help?
            </h2>
            <p style={{paddingBottom: "2.5%"}}>
                Fill up the form below and we will contact you as soon as possible!
            </p>
            <div className="container">
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Name: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control className="input" type="text" value={name}
                            onChange={e => {setName(e.target.value)}}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>NRIC No.: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" value={ic}
                            onChange={e => {setIc(e.target.value)}}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Gender: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9} style={{display:"flex"}}>
                            <Form.Check 
                                label="Male"
                                inline
                                name="gender"
                                type="radio"
                                value="Male"
                                checked={gender==="Male"}
                                onClick={e => {setGender(e.target.value)}}
                            />
                            <Form.Check
                                label="Female"
                                inline
                                name="gender"
                                type="radio"
                                value="Female"
                                checked={gender==="Female"}
                                onClick={e => {setGender(e.target.value)}}
                            />
                            <Form.Check
                                label="Prefer Not to Say"
                                inline
                                name="gender"
                                type="radio"
                                value="Prefer Not to Say"
                                checked={gender==="Prefer Not to Say"}
                                onClick={e => {setGender(e.target.value)}}
                            />  
                        </Col>
                    </Form.Group>
                    

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Address: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control className="input" type="text" value={address}
                             onChange={e => {setAddress(e.target.value)}}/>
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
                        <Form.Label column sm={2}>Contact No.: <span style={{color: "red"}}>*</span></Form.Label>
                        <Col sm={9}>
                            <Form.Control type="tel" value={contact}
                             onChange={e => {setContact(e.target.value)}}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col style={{textAlign: "left"}}>
                        <span style={{color: "red", fontSize: "small", fontStyle: "italic"}}>Note: *required fields</span>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{span:10, offset:1}}>
                            <Button onClick={e=>{submit()}}>Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            
        </div>
    )
}

export default Volunteer;