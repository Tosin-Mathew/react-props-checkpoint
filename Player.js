import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  // Inline styling
  const cardStyle = {
    width: '18rem',
    margin: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
    backgroundColor: '#f8f9fa'
  };

  const imageStyle = {
    height: '250px',
    objectFit: 'cover'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };

  const textStyle = {
    color: '#34495e',
    marginBottom: '0.5rem'
  };

  return (
    <Card style={cardStyle} className="player-card">
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        style={imageStyle}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/286x250?text=Player+Image';
        }}
      />
      <Card.Body>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text style={textStyle}>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text style={textStyle}>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text style={textStyle}>
          <strong>Jersey Number:</strong> #{jerseyNumber}
        </Card.Text>
        <Card.Text style={textStyle}>
          <strong>Age:</strong> {age} years
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/286x250?text=No+Image"
};

export default Player;
