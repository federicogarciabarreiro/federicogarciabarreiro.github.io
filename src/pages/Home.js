import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

import "../styles/Home.css";

function GameButton() {
    const navigate = useNavigate();
  
    return (
      <>
        <CustomButton
          buttonLabel={"game"}
          onClick={() => navigate('/game')}
        />
      </>
    );
  }

  function Home(){
    
    return <div className='home'>
    <h1>Hola</h1>
    <GameButton/>
    </div>
  }

  export default Home;