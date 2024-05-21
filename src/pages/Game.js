import { useNavigate } from 'react-router-dom';
import CustomGameCard from '../components/CustomGameCard';
import CustomButton from '../components/CustomButton';

import "../styles/Game.css";

function HomeButton() {
    const navigate = useNavigate();
  
    return (
      <>
        <CustomButton
          buttonLabel={"home"}
          onClick={() => navigate('/')}
        />
      </>
    );
  }

  function Game(){
    
    return <div className='game'>
    <h1>Game</h1>
    <CustomGameCard
      gameTitle={"Sediento"}
      gameEmbed={"./Sediento/game.html"}
      buttonText={"Clicka!"}
      maxWidth={600}
    />
    <HomeButton/>
    </div>
  }

  export default Game;