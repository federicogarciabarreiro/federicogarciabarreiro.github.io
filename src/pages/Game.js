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
    <CustomGameCard
      gameTitle={"Sediento"}
      gameEmbed={"../games/Sediento/game.html"}
      buttonText={"Clicka!"}
      maxWidth={600}
    />
    <HomeButton/>
    </div>
  }

  export default Game;