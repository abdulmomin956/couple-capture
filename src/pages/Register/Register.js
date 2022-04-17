import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (

        <div>
            <h1 className='text-center'>Please Register</h1>
            <div className="w-50 mx-auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark" type="register">
                        Register
                    </Button>
                </Form>
            </div>
        </div>

    );
};

export default Register;