import React from 'react';
import './style.css';
import '../../common.css';

const Intro = () => {
    return(
        <div className="intro">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="intro-video">
                        <iframe width="90%" height="400" src="https://www.youtube.com/embed/DxIDKZHW3-E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="intro-header">
                            <h2>Everyone Matters</h2>
                        </div>
                        <div className="intro-description">
                            <p>
                                Mental health, an issue not to belittle. Mental health conditions do not discriminate - it can happen to people from all walks of live. From working adults to to parents, students and even children
                                Mental illnesses are expected to be the <span style={{fontWeight:"700"}}>third</span>  leading cause of death among young people.
                                It is estimated that almost one in four people <span style={{fontWeight:"700"}}>globally</span> will experience a mental health
                                condition in their lifetime. But many peers choose to fight this battle alone because of the stigma towards them in society.
                                <br/>
                                <br/>
                                We believe the stigma <span style={{fontWeight:"700"}}>can</span> be broken. Let's do this together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;