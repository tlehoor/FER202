import logo from './logo.svg';
import './App.css';
import StudentCard from "./Component/StudentCard";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const students = [
    {
      id: "DE160182",
      name: "Nguyễn Hữu Quốc Khánh",
      location: "DaNang",
      image: "Screenshot 2025-02-18 163030.png",
    },
    {
      id: "DE160377",
      name: "Choy Vinh Thiện",
      location: "QuangNam",
      image: "Screenshot 2025-02-18 163038.png",
    },
    {
      id: "DE160500",
      name: "Hồ Văn A",
      location: "Hồ Chí Minh",
      image: "Screenshot 2025-02-18 163043.png",
    },
    {
      id: "DE160501",
      name: "Trần Văn B",
      location: "Hà Nội",
      image: "Screenshot 2025-02-18 163048.png",
    },
  ];


  return (
    <>
      <Header />
      <Container>
        <h1 className="my-4 text-center">Students Detail</h1>
        <Row>
          {students.map((student) => (
            <Col md={6} key={student.id}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />

    </>
  );
}


export default App;
