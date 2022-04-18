import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../Features/Features';

const Service = ({ props }) => {
    const { name, features, price, id } = props;
    return (
        <div className='text-center my-3' style={{ height: '315px', width: '300px', backgroundColor: 'Ivory', border: '5px solid white', boxShadow: '5px 5px 15px gray', padding: '30px' }}>
            <h2 className='text-center'>{name}</h2>
            {
                features.map(feature => <Features props={feature}></Features>)
            }
            <p style={{ color: 'orange' }}>${price}</p>
            <Link className='btn btn-dark p-3' as={Link} to="/checkout">Book A Date</Link>
        </div>
    );
};

export default Service;