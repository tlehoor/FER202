import React from 'react';
import { Card, Image } from 'react-bootstrap';

const PokemonSection = ({ className, hinhPokemon, tieuDe }) => {
  return (
    <div className={className}>
      <Image src={hinhPokemon} alt={`Pokémon ${tieuDe}`} className="pokemon-image" fluid />
      <Card className="title-box">
        <Card.Body>
          <Card.Title as="h1">{tieuDe}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokemonSection;