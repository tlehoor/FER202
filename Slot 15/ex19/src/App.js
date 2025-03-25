import React from 'react';
import AnimalCard from './components/AnimalCard';
import { Container, Row, Col } from 'react-bootstrap';

const animalData = [
  {
    name: 'Lion',
    scientificName: 'Panthero leo',
    size: 140,
    diet: ['meat'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/640px-Lion_waiting_in_Namibia.jpg', // URL ảnh
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    additional: {
      notes: 'This is the eastern gorilla...'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mountain_Gorilla_in_the_Bwindi_Impenetrable_Forest_1.jpg/640px-Mountain_Gorilla_in_the_Bwindi_Impenetrable_Forest_1.jpg',  // URL ảnh
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    additional: {
      notes: 'There are three different species...',
      link: 'https://en.wikipedia.org/wiki/Zebra'
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_zebra_Equus_quagga.jpg/640px-Plains_zebra_Equus_quagga.jpg', // URL ảnh
  }
];

function App() {
  return (
    <Container>
      <h1 className="mt-3">Animals</h1>
      <Row>
        {animalData.map((animal, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <AnimalCard
              name={animal.name}
              scientificName={animal.scientificName}
              size={animal.size}
              diet={animal.diet}
              additional={animal.additional}
              image={animal.image} // Truyền prop image
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;