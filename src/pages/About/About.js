import React from 'react';

const About = () => {
    return (
        <div>
            <h3 className='text-center'>This is about developer of the website.</h3>
            <div style={{ marginBottom: '7rem' }} className="container d-flex flex-column align-items-center">
                <img src="https://cdn5.f-cdn.com/ppic/172572729/logo/48547704/6KzC2/profile_logo_ACXGE_c5f93b0a3c62356cff851b73935c3b41.jpg" alt="" />
                <h2 className='my-3'>ABDUL MOMIN</h2>
                <p>Hi there, I'm Abdul Momin from Sirajganj, Bangladesh. I am studying physics in National University of Bangladsdesh. Computer is my dream from chilhood. Few years ago I've learnt Graphic Design from LEDP project of ICT ministry. I started freelacing on design based project. But programming was my preferable field. Because all need the logical thinking ability to program in computer. After all I knew the Programming hero web dev course from a friend. Now I'm learing in this course</p>
                <p><span className='fw-bold'>Present Goal:</span> I've already known a bunch of front end related feature to devlopment a front end of a website. Now I want to learn back end of website, Database management. I want some job related challenge that can teach me important lesson in life. After all I want a job that will give experience and help me to become advanced level developer.</p>
            </div>
        </div>
    );
};

export default About;