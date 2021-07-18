import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import {Card} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

import './style.css';
import '../../common.css';

import {_event} from '../../database/_event';
import EventModal from '../modal/eventModal';
import { Button } from 'react-bootstrap';

const Event = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const [showEventModal, setShowEventModal] = useState(false);

    const renderEvent = (data, index) => {
        return(
            <Card
            onClick={e => {
                window.open(
                    data.link,
                    '_blank' // <- This is what makes it open in a new window.
                );
            }} 
            key={index} style={{ width: '18rem', cursor: "pointer", height: "99%", marginLeft: "auto", marginRight: "auto"}}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                {data.description}
                </Card.Text>
            </Card.Body>
            </Card>
        )
    }

    return(
        <div id="event" className="event common" style={{backgroundColor: "#f7f7f7", paddingTop: "5%", paddingBottom: "5%"}}>
            <div className="container">
                <h2>Upcoming Events</h2>
            <Carousel infinite responsive={responsive}>
                {_event.map(renderEvent)}
            </Carousel>
            </div>
            <div className="container" style={{paddingTop: "1%"}}>
                    <label>Want to submit an event?</label>
                    <br/>
                    <Button variant="primary" onClick={e => {setShowEventModal(true)}}>Submit</Button>
            </div>
            <EventModal show={showEventModal} onHide={() => setShowEventModal(false)}></EventModal>
        </div>
    )
}

export default Event;