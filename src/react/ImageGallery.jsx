import React from 'react';
import { Image } from '@nextui-org/react';

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width="100%"
            height="auto"
            css={{ borderRadius: '12px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
