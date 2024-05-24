import CustomGameCard from '../components/CustomGameCard';
import Button from '../components/base/CustomButton';
import Separator from '../components/base/Separator';
import { Row, Col } from 'react-bootstrap';

  function Game(){
    
    return <div className='game'>
       <Row>
          <Col md={6}>
    <CustomGameCard
      gameTitle={"Sediento"}
      gameEmbed={"../games/Sediento/game.html"}
      buttonText={"Clicka!"}
      maxWidth={600}
    />
    </Col>
    <Separator/>
     <Button
          buttonLabel="home"
          onClickNavigate="/"
        />
        </Row>
    </div>
  }

  export default Game;