{/*CustomVideoCardContainer recibe un array objetos definida en constants.js*/}
{/*CustomVideoCardContainer permite organizar una serie de videos en una unica fila.*/}

import VideoCard from './CustomVideoCard';
import CustomSection from './CustomSection';

function CustomVideoCardContainer({ videos }) {
  return (
    <div className="video-card-container container-fluid">
      <div className="row">
        {videos.map((video, index) => (
          <div key={index} className="col-md mb-3">
            <CustomSection children={
            <VideoCard
              url={video.url}
              title={video.title}
              description={video.description}
              component={video.component}
            />}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomVideoCardContainer;
