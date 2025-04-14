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
            <div
                style={{ height: `${myHeight - 140}px` }}
                className="position-relative d-flex justify-content-center align-items-center overflow-hidden bg-light banner"
            >
                {/* Overlay Text - Optional */}
                <div className="position-absolute text-center text-white" style={{ zIndex: 2 }}>
                    <h1 className="display-4 fw-bold">Capture Love, Forever</h1>
                    <p className="lead">Professional Wedding Photography Services</p>
                    <a href="#services" className="btn btn-dark mt-3 px-4 py-2" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        View Packages
                    </a>
                </div>

                {/* Hero Image */}
                <img
                    src="https://i.ibb.co/QfHsWsM/banner.png"
                    alt="Wedding Banner"
                    className={`position-absolute top-50 start-50 translate-middle ${myWidth > 1200 ? 'w-100 h-auto' : 'w-auto h-100'
                        }`}
                    style={{ objectFit: 'cover', zIndex: 1 }}
                />
            </div>

            <section className='my-5' id='services'>
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