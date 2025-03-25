import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import "../style/Gameplay.css";

const Gameplay = ({ gameplayFeatures }) => {
  return (
    <Container fluid className="gameplay-page text-center">
      <Card
        className="discover-character-card"
        style={{
          backgroundImage: `url('/images/mega-ray.jpg')`,
          backgroundSize: "cover",
          color: "white",
          width: "100%",
          height: "auto",
          borderRadius: "0",
        }}
      >
        <Card.Body style={{ backgroundColor: "transparent" }}>
          <Row className="align-items-center justify-content-evenly">
            <Col md={6} className="discover-gameplay-info">
              <h2 className="discover-gameplay-title">
                Exciting Gameplay Awaits
              </h2>
              <p className="discover-gameplay-description">
                Explore Lumiose City and embark on thrilling adventures in
                Pokémon Legends ZA. Complete missions, battle rivals, and
                uncover the secrets of this dynamic world.
              </p>
            </Col>
            <Col md={6} className="discover-gameplay-image-col">
              <video
                className="discover-gameplay-video"
                autoPlay
                loop
                playsInline
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  position: "relative", // Đảm bảo video foreground không bị che
                  zIndex: "1", // Đặt zIndex cao hơn video background
                }}
              >
                <source src="/videos/Mega.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mega-evolution-card mt-5" style={{ borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
        <Card.Body>
          <Row className="justify-content-center">
            <Col md={8}>
              {/* Tiêu đề chính */}
              <div className="mega-evolution-title-box">
                <h2 className="mega-evolution-title">The Power of Mega Evolution</h2>
              </div>

              {/* Mô tả ngắn */}
              <p className="mega-evolution-description">
                In Lumiose City, you'll sometimes see Pokémon undergo Mega Evolution—a 
                kind of Evolution that transcends standard Evolution. 
                Effectively using Mega Evolution will likely be the key to victory in Pokémon battles.
              </p>

              {/* Tiêu đề phụ với biểu tượng Poké Ball */}
              <h3 className="mega-evolution-subtitle">
                <span className="pokeball-icon"></span>
                Mega Evolution Can Turn the Tide of Battle—But What Is It?
              </h3>

              {/* Nội dung chi tiết */}
              <div className="mega-evolution-details">
                <p>
                  Mega Evolution goes beyond the limits of regular Evolution. 
                  Only certain Pokémon can Mega Evolve. 
                  Doing so imparts power greater than regular Evolution by temporarily 
                  unleashing the energy hidden within the Pokémon. 
                  Pokémon change their appearance when they Mega Evolve, 
                  and certain Pokémon may even change types.
                </p>
                <p>
                  When Trainers have a strong bond with their Pokémon, 
                  a Key Stone worn by the Trainer resonates with a Mega Stone held by their Pokémon, 
                  allowing Mega Evolution to take place. 
                  Eventually, you'll wear a Mega Ring with a Key Stone embedded in it. 
                  Other Trainers may wear their Key Stones in different ways.
                </p>
              </div>
              <Image
                src="/images/mega-example.jpg" 
                alt="Mega Evolution"
                className="mega-evolution-image"
                fluid
              />
              <div className="mega-evolution-steps">
                <Row className="mt-4">
                  <Col md={4} className="mb-3">
                    <Image
                      src="/images/mega-processing-1.jpg" 
                      alt="Mega Evolution Step 1"
                      className="mega-processing-image"
                      fluid
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <Image
                      src="/images/mega-processing-2.jpg" 
                      alt="Mega Evolution Step 2"
                      className="mega-processing-image"
                      fluid
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <Image
                      src="/images/mega-processing-3.jpg" 
                      alt="Mega Evolution Step 3"
                      className="mega-processing-image"
                      fluid
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Image
                      src="/images/mega-processing-4.jpg" 
                      alt="Mega Evolution Step 4"
                      className="mega-processing-image"
                      fluid
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <Image
                      src="/images/mega-processing-5.jpg" 
                      alt="Mega Evolution Step 5"
                      className="mega-processing-image"
                      fluid
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <Image
                      src="/images/mega-processing-6.jpg" 
                      alt="Mega Evolution Step 6"
                      className="mega-processing-image"
                      fluid
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Footer />
    </Container>
  );
};

export default Gameplay;
