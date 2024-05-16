{/*CustomVideoCard recibe url, title, description y component.*/}
{/*CustomVideoCard permite reproducir un video.*/}

import ReactPlayer from 'react-player/lazy';
import CollapsedText from './CustomCollapsedText';

function CustomVideoCard({ url, title, description, component }) {
  return (
    <div className="card">
      <div className="card-body d-flex justify-content-center align-items-center flex-column">
        <div className="video-container mb-3">
          <ReactPlayer
            url={url}
            controls
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
        <div className="w-100">
          <CollapsedText name={title} text={description} maxLines={3} component={component}/>
        </div>
      </div>
    </div>
  );
}

export default CustomVideoCard;
