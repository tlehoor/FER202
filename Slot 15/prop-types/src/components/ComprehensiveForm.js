// components/ComprehensiveForm.js
import React, { useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const ComprehensiveForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, age, email, phoneNumber, termsAccepted } = formData;

    // Name validation
    if (!name) {
      newErrors.name = "Tên không được để trống!";
    } else if (name.length < 3 || name.length > 50) {
      newErrors.name = "Tên phải từ 3 đến 50 ký tự!";
    }

    // Age validation
    const parsedAge = parseInt(age, 10);
    if (!age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 100) {
      newErrors.age = "Tuổi phải từ 18 đến 100!";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email không được để trống!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    // Phone number validation
    if (!phoneNumber) {
      newErrors.phoneNumber = "Số điện thoại không được để trống!";
    } else if (!/^\d{10,15}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Số điện thoại phải từ 10 đến 15 chữ số!";
    }

    // Terms acceptance
    if (!termsAccepted) {
      newErrors.termsAccepted = "Bạn phải đồng ý với điều khoản!";
    }

      if (Object.keys(newErrors).length > 0) {
          setShowAlert(true)
      } else {
          setShowAlert(false);
      }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3>Đăng Ký</h3>
        {showAlert && (
            <Alert variant="danger">
                Vui lòng kiểm tra lại thông tin.
            </Alert>
        )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Số Điện Thoại</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            isInvalid={!!errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formTermsAccepted">
          <Form.Check
            type="checkbox"
            name="termsAccepted"
            label="Tôi đồng ý với điều khoản"
            checked={formData.termsAccepted}
            onChange={handleChange}
            isInvalid={!!errors.termsAccepted}
          />
          <Form.Control.Feedback type="invalid">
            {errors.termsAccepted}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Đăng Ký
        </Button>
      </Form>
    </Container>
  );
};

ComprehensiveForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ComprehensiveForm;