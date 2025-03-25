import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function showAdditionalData(data) {
  if (!data) { return; }
  const message = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n');
  alert(message);
}

function AnimalCard({ name, scientificName, size, diet, additional, image }) { // Thêm prop image
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{scientificName}</Card.Subtitle>
        <Card.Text>
          Size: {size} kg<br />
          Diet: {diet.join(', ')}
        </Card.Text>
        <Button variant="primary" onClick={() => showAdditionalData(additional)}>More Info</Button>
      </Card.Body>
    </Card>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.string, // Thêm PropTypes cho image
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  },
  image: "https://via.placeholder.com/150", // Ảnh placeholder mặc định (nếu không truyền image)
};

export default AnimalCard;