import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import NameList from "./components/NameList";
import StudentCard from "./components/StudentCard";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const userData = { name: "Thành", age: 21 };
  const namesList = ["Hồ Nguyễn Thanh Thảo", "Lê Trường Thành"];
  const students = [
    { name: "Lê Trường Thành", age: 21, avatar: "3c21a53c27049c5ac515.jpg" },
    { name: "Hồ Nguyễn Thanh Thảo", age: 22, avatar: "006e27ca6636b868e127.jpg" },
    { name: "Đoàn Xuân Sơn", age: 20, avatar: "logo192.png" },
  ];

  return (
    <>
      <Welcome name="Thành Lê" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
}


export default App;
