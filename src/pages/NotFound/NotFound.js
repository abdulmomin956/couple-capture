import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ height: '700px' }}>
            <h1 style={{ marginTop: '100px' }} className='text-center'>Sorry the page not found!!</h1>
            <h3 className='text-center'>Go to <Link className='text-decoration-none' to='/'>Homepage</Link></h3>
        </div>
    );
};

export default NotFound;