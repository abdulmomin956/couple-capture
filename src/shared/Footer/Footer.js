import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container d-flex justify-content-evenly py-5 flex-wrap'>
                <div className='text-center my-5'>
                    <h5>LATEST FROM BLOGS</h5>
                    <p>Difference between authorization and authentication</p>
                    <Link to='/blogs'><i>Read Blogs</i></Link>
                </div>
                <div className='text-center my-5'>
                    <h5>FIND US ON</h5>
                    <p><b>f</b></p>
                </div>
                <div className='text-center my-5'>
                    <h5>CONTACT</h5>
                    <p>abdulmomin956@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;