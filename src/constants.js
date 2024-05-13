import React from 'react';
import CustomButton from './components/CustomButton';

export const sections = [
  { id: 'section-0', text: 'Sección 0' },
  { id: 'section-1', text: 'Sección 1' },
  { id: 'section-2', text: 'Sección 2' },
  { id: 'section-3', text: 'Sección 3' }
];

export const images = [
  { src: "./pics/first-slide.webp", title: "Primera imagen", description: "" },
  { src: "./pics/second-slide.webp", title: "Segunda imagen", description: "" },
  { src: "./pics/third-slide.webp", title: "Tercera imagen", description: "" },
  { src: "./pics/third-slide.webp", title: "Tercera imagen", description: "" }
];

export const videos = [
  {
    url: "./Videos/Sparkle.mp4",
    title: "Título del video",
    description: "Descripción del video",
    buttonComponent: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  },
  {
    url: "./Videos/Sparkle.mp4",
    title: "Título del video",
    description: "Descripción del video"
  },
  {
    url: "./Videos/Sparkle.mp4",
    title: "Título del video",
    description: "Descripción del video",
    buttonComponent: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  },
  {
    url: "./Videos/Sparkle.mp4",
    title: "Título del video",
    description: "Descripción del video",
    buttonComponent: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  }
];

export const layers = [
  { image: '/pics/Layer4.webp', speed: 0.5, offset: '-0px' },
  { image: '/pics/Layer3.webp', speed: -0.6, offset: '-1500px' },
  { image: '/pics/Layer2.webp', speed: -1.0, offset: '+220px' },
  { image: '/pics/Layer1.webp', speed: -0.2, offset: '-500px' },
  { image: '/pics/Layer0.webp', speed: 1.0, offset: '-1800px' }
];