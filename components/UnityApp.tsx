import React, { Fragment, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Button } from "@nextui-org/react";

import { GameType } from "@/types/game";

export const UnityApp = (game: GameType) => {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: game.loaderUrl,
    dataUrl: game.dataUrl,
    frameworkUrl: game.frameworkUrl,
    codeUrl: game.codeUrl,
  });

  const [isGameVisible, setIsGameVisible] = useState(false);

  const handleFullScreen = () => {
    const unityContainer = document.getElementById("unity-container");
    if (unityContainer) {
      if (unityContainer.requestFullscreen) {
        unityContainer.requestFullscreen();
        setIsGameVisible(true);
      }
    }
  };

  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      setIsGameVisible(false);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      setIsGameVisible(false);
    }

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [isLoaded]);

  return (
    <Fragment>
      {!isLoaded && (
        <h2 className="font-bold text-xl text-center">
          Cargando... {Math.round(loadingProgression * 100)}%
        </h2>
      )}
    
      <Button 
        onClick={handleFullScreen} 
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      >
        ¡Comenzar!
      </Button>

      <div id="unity-container" className="max-w-full h-full">
        <Unity
          unityProvider={unityProvider}
          style={{ visibility: isGameVisible ? "visible" : "hidden", height: "100%" }}
        />
      </div>

    </Fragment>
  );
};

export default UnityApp;
