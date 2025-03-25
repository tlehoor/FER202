import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={12}>
                    <Carousel>
                        <Carousel.Item>
                            <Image className="d-block w-100" src="/images/slide1.jpg" alt="First slide" fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="d-block w-100" src="/images/slide2.jpg" alt="Second slide" fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="d-block w-100" src="/images/slide3.jpg" alt="Third slide" fluid />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="food-gallery text-center mt-4">
                <Col xs={6} md={2}>
                    <Image src="/images/menu-01.jpg" alt="Food 1" roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="/images/menu-02.jpg" alt="Food 2" roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="/images/menu-03.jpg" alt="Food 3" roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="/images/menu-04.jpg" alt="Food 4" roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="/images/menu-05.jpg" alt="Food 5" roundedCircle fluid />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="/images/menu-06.jpg" alt="Food 6" roundedCircle fluid />
                </Col>
            </Row>
            <Row className="text-center mt-4">
                <Col>
                    <h1 className="home-title">This is Home Page</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;