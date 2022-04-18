import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='w-50' style={{ height: '1px', backgroundColor: 'gray' }}></div>
                <p className='mt-2 mx-2 fw-bold' style={{ color: 'gray' }}>OR</p>
                <div className='w-50' style={{ height: '1px', backgroundColor: 'gray' }}></div>
            </div>
            <Button onClick={handleSignInWithGoogle} className='w-50 mx-auto py-2 d-block fw-bold' variant='dark'>Sign In With Google</Button>
            {loading && <p className='text-danger'>Loading</p>}
            {error && <p className='text-danger'>{error.message}</p>}
        </div>
    );
};

export default SocialLogin;