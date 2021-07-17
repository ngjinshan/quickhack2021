import React from 'react';
import Intro from './intro/';
import Factsheet from './factsheet/';
import Helpline from './helpline/';
import Diagnosis from './diagnosis';

import '../common.css'

const Home = () => {
    return(
        <div>
            <Intro></Intro>
            <Factsheet></Factsheet>
            <Diagnosis></Diagnosis>
            <Helpline></Helpline>
        </div>
    )
}

export default Home;