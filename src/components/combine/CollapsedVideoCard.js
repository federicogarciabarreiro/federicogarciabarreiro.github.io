import CustomCard from '../base/CustomCard';
import CollapsedText from '../base/CollapsedText';
import CustomButton from '../base/CustomButton';
import ReactPlayer from 'react-player';

function CollapsedVideoCard({ game }) {
  return (
    <>
    <div className='center-content column'>
     <CustomCard content={
        <ReactPlayer
          url={game.url}
          controls
          width='95%'
          height='95%'
          loop
          muted
        />
      }
        className="colored-card width-full"
      />

      <CustomCard content={
        <CollapsedText
          title={game.title}
          description={game.description}
          content={
            <CustomButton
              buttonLabel={game.buttonLabel}
              onClickNavigate={game.onClickNavigate}
            />
          }
        />
      }
        className="colored-card width-full"
      />
      </div>
    </>
  );
}

export default CollapsedVideoCard;
