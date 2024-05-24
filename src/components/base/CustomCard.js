import React from 'react';
import Card from 'react-bootstrap/Card';
import "../../styles/CustomCard.css"

function CustomCard({ content, className }) {
  return (
    <Card className={className}>
      <Card.Body className='card-body'>
        {content}
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
