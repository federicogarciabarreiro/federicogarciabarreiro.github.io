import React from 'react';
import VideoCard from './VideoCard';
import CustomSection from './CustomSection';

function VideoCardContainer({ videos }) {
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
              buttonComponent={video.buttonComponent}
            />}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoCardContainer;
