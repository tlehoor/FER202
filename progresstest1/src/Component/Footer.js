import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#ff7f50', padding: '20px 0', color: '#fff' }}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Our Address</h5>
                        <p>Khu đô thị FPT Đà Nẵng</p>
                        <p>+84 0236111111</p>
                        <p>+84 876 4321</p>
                        <p>mailto:info@fpt.edu.vn</p>
                    </Col>

                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p>© Copyright 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;