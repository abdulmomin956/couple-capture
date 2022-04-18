import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'


const Home = () => {
    const myHeight = window.innerHeight;
    const myWidt = window.innerWidth;
    const [myWidth, setMyWidth] = useState(myWidt)
    window.onresize = () => {
        setMyWidth(window.innerWidth);
    }

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <main>
            <div style={{ height: `${myHeight - 140}px` }} className='banner'>
                <img className={myWidth > 1200 ? 'h-auto w-100' : 'h-100 w-auto'} style={{
                    marginLeft: '50%',
                    transform: 'translateX(-50%)'
                }} src="https://i.ibb.co/QfHsWsM/banner.png" alt='' />
            </div>
            <section className='my-5' id='portfolio'>
                {/* <h3 className='text-center'>SELECTED WORKS FROM PORTFOLIO</h3> */}
                {/* <div style={{ maxWidth: '1000px' }} className="mx-auto overflow-hidden">
                    <div className="d-flex">
                        <img src="https://i.ibb.co/74n0hpY/pexels-qazi-ikram-haq-1385478.png" alt="" />
                        <img className='ms-5' src="https://i.ibb.co/1JLgdbx/pexels-yuksel-kocaman-1640057.png" alt="" />
                    </div>
                    <div className="d-flex mt-5">
                        <img className='me-5' src="https://i.ibb.co/X4MMH4H/pexels-kaushal-moradiya-2781104.png" alt="" />
                        <img src="https://i.ibb.co/yn6hSwf/pexels-aleksandr-neplokhov-1371800.png" alt="" />
                    </div>
                </div> */}
            </section>
            <section className='my-5'>
                <h3 className='text-center'>Services</h3>
                <div className="d-flex flex-wrap justify-content-evenly">
                    {
                        services.map(service => <Service key={service.id} props={service}></Service>)
                    }
                </div>
            </section>
        </main>
    );
};

export default Home;