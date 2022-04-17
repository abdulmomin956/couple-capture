import React from 'react';
import './Home.css'


const Home = () => {
    const myHeight = window.innerHeight;
    return (
        <main>
            <div style={{ height: `${myHeight - 140}px` }} className='banner'>
                <img className='w-100 h-auto' src="https://i.ibb.co/QfHsWsM/banner.png" alt='' />
            </div>
            <section className='my-5' id='portfolio'>
                <h3 className='text-center'>SELECTED WORKS FROM PORTFOLIO</h3>
                <div style={{ maxWidth: '1000px' }} className="mx-auto border overflow-hidden">
                    <div className="d-flex">
                        <img src="https://i.ibb.co/74n0hpY/pexels-qazi-ikram-haq-1385478.png" alt="" />
                        <img className='ms-5' src="https://i.ibb.co/1JLgdbx/pexels-yuksel-kocaman-1640057.png" alt="" />
                    </div>
                    <div className="d-flex mt-5">
                        <img className='me-5' src="https://i.ibb.co/X4MMH4H/pexels-kaushal-moradiya-2781104.png" alt="" />
                        <img src="https://i.ibb.co/yn6hSwf/pexels-aleksandr-neplokhov-1371800.png" alt="" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;