import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../style/Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        setError("Tài khoản hoặc mật khẩu không đúng!");
        setIsLoading(false);
        return;
      }

      if (!user.active) {
        setError("Tài khoản của bạn không hoạt động. Vui lòng liên hệ quản trị viên!");
        setIsLoading(false);
        return;
      }

      console.log("User before login:", user);
      onLogin(user);
      let welcomeMessage = "Người dùng";
      if (user.role?.toLowerCase() === "admin") {
        welcomeMessage = "Quản trị viên";
      } else if (user.role?.toLowerCase() === "moderator") {
        welcomeMessage = "Người điều hành";
      }
      alert(`Đăng nhập thành công! Chào mừng ${welcomeMessage}!`);
      navigate("/");
    } catch (err) {
      console.error("Lỗi khi đăng nhập:", err.response || err.message || err);
      if (err.response) {
        setError(`Lỗi từ server: ${err.response.data.message || err.response.statusText}`);
      } else if (err.request) {
        setError("Không thể kết nối đến server. Vui lòng kiểm tra xem JSON Server có đang chạy không!");
      } else {
        setError("Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="login-page">
      <Row className="vh-100">
        <Col md={6} className="d-flex align-items-center justify-content-center login-image-col">
          <Image
            src="/images/login.jpg"
            alt="Pokémon Scarlet and Violet"
            fluid
            className="login-image"
          />
        </Col>

        <Col md={6} className="d-flex align-items-center justify-content-center login-form-col">
          <div className="login-form">
            <h2 className="text-center mb-4">Đăng Nhập</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label className="form-label">Tên đăng nhập</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label className="form-label">Mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </Form.Group>

              <Button type="submit" className="login-button w-100" disabled={isLoading}>
                {isLoading ? "Đang Đăng Nhập..." : "Đăng Nhập"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;