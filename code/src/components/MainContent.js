import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PokemonSection from './PokemonSection.js';

const MainContent = ({ hinhPokemonScarlet, hinhPokemonViolet }) => {
  return (
    <Row className="main-content g-0">
      <Col xs={12} md={6}>
        <PokemonSection
          className="scarlet-section"
          hinhPokemon={hinhPokemonScarlet}
          tieuDe="Pokémon Scarlet"
        />
      </Col>
      <Col xs={12} md={6}>
        <PokemonSection
          className="violet-section"
          hinhPokemon={hinhPokemonViolet}
          tieuDe="Pokémon Violet"
        />
      </Col>
    </Row>
  );
};

export default MainContent;