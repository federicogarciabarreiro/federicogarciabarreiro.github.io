import React from 'react';
import { Button } from "@nextui-org/button";

const DownloadCVButton = () => {
  return (
    <a href="/assets/cv.pdf" download>
      <Button>¡Descargar CV!</Button>
    </a>
  );
};

export default DownloadCVButton;