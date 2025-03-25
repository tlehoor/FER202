import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card, Modal } from "react-bootstrap";
import Footer from "../components/Footer";
import "../style/Pokemon.css";
import axios from "axios";

const Pokemon = () => {
  const [pokemonRoster, setPokemonRoster] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPokemonRoster = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pokemonRoster");
        setPokemonRoster(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu Pokémon:", error);
      }
    };

    fetchPokemonRoster();
  }, []);

  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const pokemonRows = chunkArray(pokemonRoster, 3);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  };

  return (
    <Container fluid className="pokemon-page text-center">
      <Card
        className="discover-pokemon-card"
        style={{
          backgroundImage: `url('/images/lumiose-city-context.jpg')`,
          backgroundSize: "cover",
          color: "white",
          width: "100%",
          height: "auto",
          borderRadius: "0",
        }}
      >
        <Card.Body>
          <Row className="align-items-center justify-content-evenly">
            <Col md={6} className="discover-pokemon-info">
              <h2 className="discover-pokemon-title">
                New Pokémon to Discover
              </h2>
              <p className="discover-pokemon-description">
                Pokémon Scarlet and Pokémon Violet will have many
                never-before-seen Pokémon waiting to meet you. These are just a
                few of the incredible new Pokémon you’ll encounter in this new
                adventure.
              </p>
            </Col>

            <Col md={6} className="discover-pokemon-image-col">
              <Image
                src="/images/Eternal-Flower.jpg"
                className="discover-pokemon-image"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="pokemon-roster-section mt-5">
        <h2 className="pokemon-roster-title">Pokémon Roster</h2>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="diamond"></span>
          <span className="line"></span>
        </div>
        {pokemonRows.map((row, rowIndex) => (
          <Row
            key={rowIndex}
            className="justify-content-center align-items-center"
          >
            {row.map((pokemon, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              return (
                <Col
                  key={pokemon.id}
                  md={4}
                  className="pokemon-roster-item"
                  style={{ "--index": index }}
                >
                  <div
                    className="pokemon-card"
                    onClick={() => handleCardClick(pokemon)}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={pokemon.image}
                      alt={pokemon.name}
                      fluid
                      className="pokemon-roster-image"
                    />
                    <div className="pokemon-name-container">
                      <div className="pokemon-name-line"></div>
                      <p className="pokemon-roster-name">{pokemon.name}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered className="pokemon-modal">
        <Modal.Body className="pokemon-detail-card">
          <div className="close-button" onClick={handleCloseModal}>
            ×
          </div>
          {selectedPokemon && (
            <>
              <Image
                src={selectedPokemon.image}
                alt={selectedPokemon.name}
                fluid
                className="pokemon-detail-image"
              />
              <h3 className="pokemon-detail-name">{selectedPokemon.name}</h3>
              <div className="pokemon-detail-info">
                <div className="info-item">
                  <span className="info-label">Category</span>
                  <span className="info-value">{selectedPokemon.category}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Height</span>
                  <span className="info-value">{selectedPokemon.height}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Type</span>
                  <span className="info-value">{selectedPokemon.type}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Weight</span>
                  <span className="info-value">{selectedPokemon.weight}</span>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      <Footer />
    </Container>
  );
};

export default Pokemon;