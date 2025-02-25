import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function ValidatedForm() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState(''); 
    const [country, setCountry] = useState(''); 
    const [agree, setAgree] = useState(false); 
    const [isNameTouched, setIsNameTouched] = useState(false);

    const [isNameValid, setIsNameValid] = useState(true);
    const [nameError, setNameError] = useState('');

    const validateName = (name) => {
        return name.length >= 3;
    };

      useEffect(() => {
        if (isNameTouched) {
            const isValid = validateName(name);
            setIsNameValid(isValid);
            if (!isValid) {
                setNameError('Name must be at least 3 characters long.');
            } else {
                setNameError('');
            }
        }
    }, [name, isNameTouched]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleNameBlur = () => {
        setIsNameTouched(true)
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleAgreeChange = (e) => {
        setAgree(e.target.checked); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsNameTouched(true)

        if (validateName(name) && gender && country && agree) {
            console.log('Form submitted:', { name, gender, country, agree });
             setName('');
             setGender('');
             setCountry('');
             setAgree(false);
             setIsNameTouched(false)
        } else {
           console.log('Form is invalid. Please correct the errors.');
        }
    };

    const isFormValid = validateName(name) && gender !== '' && country !== '' && agree;

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    isValid={isNameTouched && isNameValid}
                    isInvalid={isNameTouched && !isNameValid}
                />
               <Form.Control.Feedback type="invalid">
                    {nameError}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                {['Male', 'Female', 'Other'].map((genderOption) => (
                    <Form.Check
                        key={genderOption}
                        inline
                        label={genderOption}
                        name="gender"
                        type="radio"
                        id={`gender-${genderOption}`}
                        value={genderOption}
                        checked={gender === genderOption}  // Controlled component: set checked state
                        onChange={handleGenderChange}
                        isInvalid={!gender && isNameTouched} //Show invalid if no gender is selected
                    />
                ))}
                {!gender && isNameTouched ? <Form.Control.Feedback type='invalid'>Please select an option</Form.Control.Feedback> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Select
                    value={country}
                    onChange={handleCountryChange}
                    isInvalid={!country && isNameTouched} //Show invalid when is touched
                >
                    <option value="">Select a country</option> {/* Default option */}
                    <option value="USA">Hà Nội</option>
                    <option value="Canada">Hồ Chí Minh</option>
                    <option value="UK">Cần Thơ</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                </Form.Select>
                {!country && isNameTouched ? <Form.Control.Feedback type='invalid'>Please select an option</Form.Control.Feedback> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAgree">
                <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    checked={agree}
                    onChange={handleAgreeChange}
                    isInvalid={!agree && isNameTouched} //Show invalid when submit
                />
                {!agree && isNameTouched ? <Form.Control.Feedback type='invalid'>Please check</Form.Control.Feedback> : null}
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!isFormValid}>
                Submit
            </Button>
        </Form>
    );
}

export default ValidatedForm;