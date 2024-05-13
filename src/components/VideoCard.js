import React from 'react';
import ReactPlayer from 'react-player/lazy';
import CollapsedText from './CollapsedText';

function VideoCard({ url, title, description, buttonComponent }) {
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
          <CollapsedText name={title} text={description} maxLines={3} buttonComponent={buttonComponent}/>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
