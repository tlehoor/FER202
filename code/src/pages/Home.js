import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Image,
  Button,
  Modal,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import axios from "axios";
import "../style/Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  // State để quản lý trạng thái hiển thị của modal
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Đặt âm lượng 50%
    }
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [startIndex, setStartIndex] = useState(0); // Theo dõi vị trí bắt đầu

  const itemsPerPage = 3;

  // Hàm mở modal
  const handleShow = () => setShowModal(true);
  // Hàm đóng modal
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    // Lấy dữ liệu Pokémon
    const fetchPokemon = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pokemon");
        setPokemonList(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu Pokémon:", error);
      }
    };

    // Lấy dữ liệu Characters
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("http://localhost:3001/characters");
        setCharacters(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu nhân vật:", error);
      }
    };

    fetchPokemon();
    fetchCharacters();
  }, []);

  // Chuyển đến nhóm Pokémon trước đó
  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? pokemonList.length - itemsPerPage : prevIndex - 1
    );
  };

  // Chuyển đến nhóm Pokémon tiếp theo
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage >= pokemonList.length ? 0 : prevIndex + 1
    );
  };

  // Lấy 3 Pokémon để hiển thị
  const displayedPokemon = pokemonList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Kiểm tra xem có nên hiển thị nút "trước" và "sau" không
  const showPrevButton = startIndex > 0;
  const showNextButton = startIndex + itemsPerPage < pokemonList.length;

  return (
    <div className="homepage">
      <Container fluid className="pokemon-promo text-center">
      <audio ref={audioRef} autoPlay loop>
  <source src="/audio/theme.mp3" type="audio/mp3" />
  Your browser does not support the audio tag.
</audio>

        {/* Hình ảnh chính của Pokémon Legends: Z-A */}
        <Image
          src="/images/main.jpg"
          alt="Pokémon Legends: Z-A"
          className="main-image"
          fluid
        />
        {/* Tiêu đề và mô tả */}
        <h1 className="release-title">
          Pokémon Legends: Z-A Phát Hành Vào Cuối Năm 2025!
        </h1>
        <div className="video-preview">
          <Image
            src="/images/preview.jpg"
            alt="Video Preview"
            className="preview-image"
            fluid
          />
          <Button className="play-button" onClick={handleShow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </Button>
        </div>
        {/* Modal để hiển thị video */}
        <Modal show={showModal} onHide={handleClose} centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Trailer Pokémon Legends: Z-A</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="video-container">
              <iframe
                className="promo-video"
                src="https://www.youtube.com/embed/3VH7kQgM4Mo?si=AzCyftS4Man_DCQF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                autoPlay
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
        {/* Phần còn lại của trang */}
        <Card className="lumiose-card">
          <Card.Body>
            <h2 className="lumiose-title">Visit Lumiose City</h2>
            <p className="lumiose-description">
              The story is set in Lumiose City, where an urban redevelopment plan
              is underway to shape the city into a place that belongs to both
              people and Pokémon. Compared to Lumiose City as it appeared in the
              Pokémon X and Pokémon Y games, released in 2013, more greenery now
              adorns the city, alongside facilities with a cutting-edge feel.
            </p>
            <p className="lumiose-description">
              In Lumiose City, spaces frequented by people—such as the shopping
              arcades, cafés, and restaurants—coexist with more natural areas,
              such as waterfronts and verdant parks. At the center of Lumiose
              stands Prism Tower, the very symbol of the city.
            </p>
            <Image
              src="/images/lumiose-city.jpg"
              alt="Lumiose City"
              className="lumiose-image"
              fluid
            />
            <Row className="mt-4 gx-0 gy-2">
              <Col xs={6} className="mb-2 lumiose-gallery-image-col">
                <Image
                  src="/images/lumiose-city-1.jpg"
                  alt="Lumiose City 1"
                  className="lumiose-gallery-image"
                  fluid
                />
              </Col>
              <Col xs={6} className="mb-2 lumiose-gallery-image-col">
                <Image
                  src="/images/lumiose-city-2.jpg"
                  alt="Lumiose City 2"
                  className="lumiose-gallery-image"
                  fluid
                />
              </Col>
              <Col xs={6} className="mb-2 lumiose-gallery-image-col">
                <Image
                  src="/images/lumiose-city-3.jpg"
                  alt="Lumiose City 3"
                  className="lumiose-gallery-image"
                  fluid
                />
              </Col>
              <Col xs={6} className="mb-2 lumiose-gallery-image-col">
                <Image
                  src="/images/lumiose-city-4.jpg"
                  alt="Lumiose City 4"
                  className="lumiose-gallery-image"
                  fluid
                />
              </Col>
            </Row>
            {/* Story begin */}
            <h2 className="story-title">
              <span className="title-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 110.6 110.6"
                >
                  <g>
                    <circle className="st0" cx="55.3" cy="55.6" r="14.5" />
                    <g>
                      <path
                        className="st0"
                        d="M55.3,80.6c-11.7,0-21.6-7.7-24.9-18.3H.1c3.3,27.6,26.7,49,55.2,49s52-21.4,55.2-49h-30.4c-3.3,10.6-13.2,18.3-24.8,18.3Z"
                      />
                      <path
                        className="st0"
                        d="M55.3,28.5c12.8,0,23.5,9.3,25.6,21.5h29.8C107.9,21.9,84.2,0,55.3,0S2.8,21.9,0,50h29.8c2.1-12.2,12.8-21.5,25.6-21.5h0Z"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              The Story Begins with a Sightseeing Trip to Lumiose City...
            </h2>
            <p className="story-description">
              While visiting Lumiose City during your travels, you'll come to stay
              in an old hotel named Hotel Z. This hotel will serve as your base as
              you and the new friends you'll meet in Lumiose tackle all sorts of
              incidents that will occur in the city.
            </p>
            <Row className="mt-4 gx-0 gy-2">
              <Col xs={6} className="mb-2">
                <Image
                  src="/images/story-1.jpg"
                  alt="Lumiose City 1"
                  className="lumiose-gallery-image"
                  fluid
                />
              </Col>
              <Col xs={6} className="mb-2">
                <Image
                  src="/images/story-2.jpg"
                  alt="Lumiose City 2"
                  className="lumiose-gallery-image"
                  fluid
                />
              </Col>
              <Col xs={6} className="mb-2">
                <Image
                  src="/images/story-3.jpg"
                  alt="Lumiose City 3"
                  className="lumiose-gallery-image"
                  fluid
                />
              </Col>
              <Col xs={6} className="mb-2">
                <Image
                  src="/images/story-4.jpg"
                  alt="Lumiose City 4"
                  className="lumiose-gallery-image"
                  fluid
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Card bọc phần giới thiệu Pokémon mới */}
        <Card className="pokemon-slide" style={{ backgroundColor: "#FEFDF3" }}>
          <Card.Body style={{ padding: "0" }}>
            <div className="pokemon-intro">
              <h2 className="lumiose-title">Let's reunite with old friends!</h2>  
              <div className="pokemon-slider">
                {showPrevButton && (
                  <Button
                    className="slider-button prev-button"
                    onClick={handlePrev}
                  >
                    ❮
                  </Button>
                )}
                <Row className="justify-content-center" style={{ backgroundColor: "#FEFDF3" }}>
                  {displayedPokemon.map((pokemon) => (
                    <Col key={pokemon.id} xs={4} md={3} className="pokemon-item">
                      <Image
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="pokemon-image"
                        fluid
                      />
                      <p className="pokemon-name" style={{ backgroundColor: "#FEFDF3" }}>
                        {pokemon.name}
                      </p>
                    </Col>
                  ))}
                </Row>
                {showNextButton && (
                  <Button
                    className="slider-button next-button"
                    onClick={handleNext}
                  >
                    ❯
                  </Button>
                )}
              </div>
              <Link to="pokemon">
                <Button className="see-all-button">
                  See them all!! <span className="arrow">➜</span>
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        {/* Phần Meet the Characters */}
        <Card className="characters-card">
          <Card.Body>
            <div className="characters-intro">
              <h2 className="lumiose-title">
                Meet People and Pokémon in
                <br />
                Lumiose City
              </h2>
              <Row className="align-items-center justify-content-center">
                <Col md={5} className="characters-images">
                  <Image
                    src={characters[1]?.image}
                    alt={characters[1]?.name}
                    className="character-image"
                    fluid
                  />
                </Col>
                <Col md={5} className="characters-info">
                  <h2 className="characters-title">Urbain / Taunie</h2>
                  <p className="characters-description">
                    You'll make a friend who lives and works at Hotel Z,
                    supporting the owner however they can. They may come on strong
                    at times, but they like helping people and Pokémon. They’re
                    quite skilled at Pokémon battles too.
                  </p>
                  <p>
                    The appearance you choose at the beginning of the game will
                    determine whether Urbain or Taunie will appear.
                  </p>
                  <Link to="/character">
                    <Button className="characters-button">
                      Meet the characters <span className="arrow">➜</span>
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;