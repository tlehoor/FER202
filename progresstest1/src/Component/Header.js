import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar expand="lg" className="px-4" style={{ backgroundColor: '#ff7f50' }}>
            <Navbar.Brand href="#">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
                    alt="FPT University"
                    height="40"
                />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#">Trang chủ</Nav.Link>
                <Nav.Link href="#">Ngành học</Nav.Link>
                <Nav.Link href="#">Tuyển sinh</Nav.Link>
                <Nav.Link href="#">Sinh viên</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" />
            </Form>
        </Navbar>
    );
};

export default Header;
