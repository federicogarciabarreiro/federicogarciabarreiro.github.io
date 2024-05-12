import React from 'react';

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
      <iframe
        frameborder="0"
        src={embed}
        title={title}
        width={h}
        height={w}
        allowfullscreen="" 
      ></iframe>
    </div>
    
  );
};

export default GameIFrame;