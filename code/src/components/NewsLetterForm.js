// src/components/NewsletterForm.js
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button, Alert, Container } from 'react-bootstrap';

const NewsletterForm = () => {
  const [daGui, setDaGui] = useState(false);

  const quyTacXacThuc = Yup.object({
    email: Yup.string()
      .email('Email không hợp lệ')
      .required('Email là bắt buộc'),
  });

  const giaTriBanDau = {
    email: '',
  };

  const xuLyGuiForm = (values, { resetForm }) => {
    console.log('Form đã gửi:', values);
    setDaGui(true);
    resetForm();
    setTimeout(() => setDaGui(false), 3000);
  };

  return (
    <Container className="mt-4">
      <h3>Đăng Ký Nhận Tin Tức</h3>
      {daGui && <Alert variant="success">Cảm ơn bạn đã đăng ký!</Alert>}
      <Formik
        initialValues={giaTriBanDau}
        validationSchema={quyTacXacThuc}
        onSubmit={xuLyGuiForm}
      >
        <Form as={BootstrapForm}>
          <BootstrapForm.Group controlId="formEmail">
            <BootstrapForm.Label>Địa Chỉ Email</BootstrapForm.Label>
            <Field
              name="email"
              type="email"
              as={BootstrapForm.Control}
              placeholder="Nhập email của bạn"
            />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </BootstrapForm.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Đăng Ký
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default NewsletterForm;