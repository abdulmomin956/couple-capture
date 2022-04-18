import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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