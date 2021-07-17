import React from 'react';
import Intro from './intro/';
import Factsheet from './factsheet/';
import Helpline from './helpline/'

import '../common.css'
import Volunteer from './volunteer';

const Home = () => {
    return(
        <div>
            <Intro></Intro>
            <Factsheet></Factsheet>
            <Helpline></Helpline>
            <Volunteer></Volunteer>
        </div>
    )
}

export default Home;