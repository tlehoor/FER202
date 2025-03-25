import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card, Modal } from "react-bootstrap";
import Footer from "../components/Footer";
import axios from "axios";
import "../style/Character.css";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("http://localhost:3001/characters");
        setCharacters(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu nhân vật:", error);
      }
    };

    fetchCharacters();
  }, []);

  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const characterRows = chunkArray(characters, 3);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCharacter(null);
  };

  return (
    <Container fluid className="character-page text-center">
      <Card
        className="discover-character-card"
        style={{
          backgroundImage: `url('/images/lumiose-zygarde.jpg')`,
          backgroundSize: "cover",
          color: "white",
          width: "100%",
          height: "auto",
          borderRadius: "0",
        }}
      >
        <Card.Body>
          <Row className="align-items-center justify-content-evenly">
            <Col md={6} className="discover-character-info">
              <h2 className="discover-character-title">New Friend to Meet</h2>
              <p className="discover-character-description">
                Pokémon Legends ZA will take you to Lumiose City, where Trainers
                will meet new friends and rivals. Here, Trainers will have to
                complete assigned missions, encounter friends and rivals, and
                defeat them.
              </p>
            </Col>

            <Col md={6} className="discover-character-image-col">
              <video
                className="discover-character-video"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", borderRadius: "10px" }}
              >
                <source src="/videos/character-video.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="character-section mt-5">
        <h2 className="character-title">Characters</h2>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="diamond"></span>
          <span className="line"></span>
        </div>
        {characterRows.map((row, rowIndex) => (
          <Row
            key={rowIndex}
            className="justify-content-center align-items-center"
          >
            {row.map((character, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              return (
                <Col
                  key={character.id}
                  md={4}
                  className="character-item"
                  style={{ "--index": index }}
                >
                  <div
                    className="character-card"
                    onClick={() => handleCardClick(character)}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={character.image}
                      alt={character.name}
                      fluid
                      className="character-image"
                    />
                    <div className="character-name-container">
                      <p className="character-name">{character.name}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        ))}
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="character-modal"
      >
        <Modal.Body className="character-detail-card">
          <div className="close-button" onClick={handleCloseModal}>
            ×
          </div>
          {selectedCharacter && (
            <>
              <Image
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                fluid
                className="character-detail-image"
              />
              <h3 className="character-detail-name">
                {selectedCharacter.name}
              </h3>
              <p className="character-detail-description">
                {selectedCharacter.description}
              </p>
            </>
          )}
        </Modal.Body>
      </Modal>
      <Footer />
    </Container>
  );
};

export default Character;
