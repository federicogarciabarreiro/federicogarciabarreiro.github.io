import React from 'react';
import Iframe from 'react-iframe'

function VideoCard({ url }) {
  return (
    <div className="videoCardPlayer">
    <Iframe url={url}
              width="640px"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative">
    </Iframe>
    </div>
  );
}

export default VideoCard;
