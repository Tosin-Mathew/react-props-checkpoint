import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from '../players';

const PlayersList = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#ecf0f1',
    minHeight: '100vh'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2c3e50',
    fontWeight: 'bold'
  };

  return (
    <Container style={containerStyle}>
      <h1 style={titleStyle}>⚽ World Class Football Players</h1>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
