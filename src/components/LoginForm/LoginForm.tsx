import React, { useState } from 'react';
import { Button, Form, Alert, Container } from 'react-bootstrap';
import { useTypedDispatch } from '../../hooks/useRedux.ts';
import { useAction } from '../../hooks/useActions.ts';

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useTypedDispatch();
    const {setIsAuth} = useAction();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        // Auth logic
        (email === 'admin@admin.com' && password === 'admin')
            ? dispatch(setIsAuth(true))
            : setError('Invalid email or password');
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Container>
                <h3 className='mb-4 text-light'>Log in</h3>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formEmail'>
                        <Form.Label className='text-light'>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please enter a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPassword'>
                        <Form.Label className='text-light'>Password</Form.Label>
                        <Form.Control
                            required
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please enter your password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant='primary' type='submit'>
                        Log in
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
