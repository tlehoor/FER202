import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function ValidatedForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    useEffect(() => {
        if (isEmailTouched) {
            const isValid = validateEmail(email);
            setIsEmailValid(isValid);
            if (!isValid) {
                setEmailErrorMessage('Email không hợp lệ. Vui lòng nhập lại!');
            } else {
                setEmailErrorMessage('');
            }
        }
    }, [email, isEmailTouched]);

    useEffect(() => {
        if (isPasswordTouched) {
            const isValid = validatePassword(password);
            setIsPasswordValid(isValid);
            if (!isValid) {
                setPasswordErrorMessage('Mật khẩu phải có ít nhất 8 ký tự!');
            } else {
                setPasswordErrorMessage('');
            }
        }
    }, [password, isPasswordTouched]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailBlur = () => {
        setIsEmailTouched(true);
    };

    const handlePasswordBlur = () => {
        setIsPasswordTouched(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
         setIsEmailTouched(true);
         setIsPasswordTouched(true);

        if (validateEmail(email) && validatePassword(password)) {
            console.log('Form submitted:', { email, password });
            // Reset form (optional)
            setEmail('');
            setPassword('');
            setIsEmailTouched(false);
            setIsPasswordTouched(false);

        } else {
             console.log('Form is invalid.  Please correct the errors.');

        }

    }

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    isValid={isEmailTouched && isEmailValid}
                    isInvalid={isEmailTouched && !isEmailValid}
                />
                <Form.Control.Feedback type="invalid">
                    {emailErrorMessage}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    isValid={isPasswordTouched && isPasswordValid}
                    isInvalid={isPasswordTouched && !isPasswordValid}
                />
                <Form.Control.Feedback type="invalid">
                    {passwordErrorMessage}
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                disabled={!isEmailValid || !isPasswordValid || !isEmailTouched || !isPasswordTouched}
            >
                Submit
            </Button>
        </Form>
    );
}

export default ValidatedForm;