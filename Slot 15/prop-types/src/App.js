// src/App.js
import React from "react";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import ComprehensiveForm from "./components/ComprehensiveForm";
import { Container } from 'react-bootstrap';
import './index.css';

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <Container className="mt-3">
      <h2>Ứng Dụng React</h2>

      {/* Trường hợp hợp lệ */}
      <UserProfile name="Nguyễn Văn A" age={25} />

      {/* Trường hợp name không hợp lệ */}
      <UserProfile name="" age={25} />

      {/* Trường hợp tuổi không hợp lệ */}
      <UserProfile name="Nguyễn Văn B" age="twenty five" />

      {/* Trường hợp không nhập tuổi */}
      <UserProfile name="Nguyễn Văn C" age={null} />
      <hr />

      <h2>UserProfile2</h2>
      <UserProfile2 name="Initial Name" age={30} onSubmit={handleFormSubmit} />
      <hr />

      <h2>MyForm</h2>
      <MyForm title="Đăng Ký" onSubmit={handleFormSubmit} />
      <hr />

      <h2>Comprehensive Form</h2>
      <ComprehensiveForm onSubmit={handleFormSubmit} />
    </Container>
  );
};

export default App;


