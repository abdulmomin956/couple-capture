import React from 'react';
import './Home.css'


const Home = () => {
    const myHeight = window.innerHeight;
    return (
        <div style={{ height: `${myHeight - 140}px` }} className='banner'>
            <img className='w-100 h-auto' src="https://i.ibb.co/QfHsWsM/banner.png" alt='' />
        </div>
    );
};

export default Home;