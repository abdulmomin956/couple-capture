import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className='my-5'>
            <h1 className='text-center'>Please Login</h1>
            <div className="w-50 mx-auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                        <Form.Text className="text-danger">
                            {
                                loading && 'loading'
                            }
                            {
                                error && error.message
                            }
                        </Form.Text>
                    </Form.Group>

                    <Button variant="dark" type="login">
                        Submit
                    </Button>
                </Form>
                <p className='mt-3'>Are you new?<Link className='ms-2 fw-bold text-decoration-none' to='/register'>Please Register</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;