import React from 'react';
import ReactPlayer from 'react-player/lazy';
import CollapsedText from './CollapsedText';

function VideoCard({url, title, description, buttonComponent}) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url={url}
              controls
              width='100%'
              height='100%'
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
            <hr/>
          </div>
          <CollapsedText name={title} text={description} buttonComponent={buttonComponent}/>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
