import React from 'react';
import Iframe from 'react-iframe'

function GameIFrame ({ title, embed, h, w }) {

  window.coi = {
    shouldRegister: () => !reloadedBySelf,
    shouldDeregister: () => false,
    coepCredentialless: () => true,
    coepDegrade: () => true,
    doReload: () => window.location.reload(),
    quiet: false
}

  return (
    <div>
      <Iframe
        frameborder="0"
        src={embed}
        title={title}
        width={h}
        height={w}
        allowfullscreen="" 
      ></Iframe>
    </div>
    
  );
};

export default GameIFrame;