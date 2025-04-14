import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../Features/Features';

const Service = ({ props }) => {
    const { name, features, price, id } = props;
    return (
        <div className='card text-center my-2 d-flex flex-column justify-content-between' style={{ height: '320px', width: '300px', backgroundColor: 'Ivory', border: '5px solid white', boxShadow: '5px 5px 15px gray', padding: '30px' }}>
            {id === 2 ? <div class="ribbon text-secondary px-3 py-1 position-absolute top-0 start-50 translate-middle-x rounded-bottom">
                ★ Recommended
            </div> : ''}
            <div>
                <h2 className='text-center'>{name}</h2>
                {
                    features.map((feature, i) => <Features key={i} props={feature}></Features>)
                }
                <p className='fw-bold' style={{ color: 'green' }}>${price}</p>
            </div>
            <Link className='btn btn-dark py-2 px-3 text-uppercase' as={Link} to="/checkout">Book A Date</Link>
        </div>
    );
};

export default Service;