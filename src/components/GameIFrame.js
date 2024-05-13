import React from 'react';
import Iframe from 'react-iframe';

function GameIFrame({ title, embed }) {
  const paddingTop = '100%';

  return (
    <div className="card" style={{ maxWidth: '100%', margin: 'auto' }}>
      <div className="card-body" style={{ padding: 0 }}>
        <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: paddingTop }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Iframe
              frameborder="0"
              src={embed}
              title={title}
              width="100%"
              height="100%"
              allowfullscreen=""
            ></Iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameIFrame;
