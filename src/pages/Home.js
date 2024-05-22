import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import CustomCarousel from '../components/CustomCarousel';
import CustomVideoCardContainer from "../components/CustomVideoCardContainer";
import { images_sparkle, videos_sparkle, videos_creamyland, videos_leveldesign, videos_switch } from '../constants';
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
    <CustomCarousel images={images_sparkle} />
    <CustomVideoCardContainer videos={videos_sparkle} />
    <CustomVideoCardContainer videos={videos_creamyland} />
    <CustomVideoCardContainer videos={videos_leveldesign} />
    <CustomVideoCardContainer videos={videos_switch} />
    <GameButton/>
    </div>
  }

  export default Home;