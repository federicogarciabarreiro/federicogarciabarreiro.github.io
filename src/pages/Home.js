import React from 'react';

import { games, gamePics } from '../constants';
import CollapsedVideoCard from '../components/combine/CollapsedVideoCard';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCarousel from '../components/base/CustomCarousel';
import Separator from '../components/base/Separator';

function Home() {
  const sparkle_game = games[0];
  const sparkle_gamePics = gamePics[0];

  return (
    <div className='home-app'>
      <Container>
        <Row>
          <Col md={6}>
            <CollapsedVideoCard game={sparkle_game} />
          </Col>
          <Col md={6}>
            <CollapsedVideoCard game={sparkle_game} />
          </Col>
          <Separator/>
        </Row>
            <CollapsedVideoCard game={sparkle_game} />
      </Container>
      <Separator/>
      <CustomCarousel images={sparkle_gamePics} />
    </div>
  );
}

export default Home;