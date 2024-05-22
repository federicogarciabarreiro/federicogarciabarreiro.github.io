{/*Elementos adicionales.*/ }
import CustomButton from './components/CustomButton';

{/*Paginas*/ }
import Home from './pages/Home';
import Game from './pages/Game';

export const largeLayers = [
  { image: '/pics/Layer4.webp', speed: 0.5, offset: '-0px' },
  { image: '/pics/Layer3.webp', speed: -0.6, offset: '-1500px' },
  { image: '/pics/Layer2.webp', speed: -1.0, offset: '+220px' },
  { image: '/pics/Layer1.webp', speed: -0.2, offset: '-500px' },
  { image: '/pics/Layer0.webp', speed: 1.0, offset: '-1800px' }
];

export const mediumLayers = [
  { image: '/pics/Layer4.webp', speed: 0.75, offset: '-0px' },
  { image: '/pics/Layer3.webp', speed: -0.9, offset: '-1500px' },
  { image: '/pics/Layer2.webp', speed: -1.5, offset: '+40px' },
  { image: '/pics/Layer1.webp', speed: -0.3, offset: '-1700px' },
  { image: '/pics/Layer0.webp', speed: 1.5, offset: '-2750px' }
];

export const smallLayers = [
  { image: '/pics/Layer4.webp', speed: 1, offset: '-0px' },
  { image: '/pics/Layer3.webp', speed: -1.2, offset: '-1500px' },
  { image: '/pics/Layer2.webp', speed: -2.0, offset: '+100px' },
  { image: '/pics/Layer1.webp', speed: -0.4, offset: '-3100px' },
  { image: '/pics/Layer0.webp', speed: 2.0, offset: '-4900px' }
];

export const pages = [
  {
    key: 0,
    path: "/",
    element: <Home />
  },
  {
    key: 1,
    path: "/game",
    element: <Game />
  }
];

export const sections = [
  { id: 'section-0', text: 'Sección 0' },
  { id: 'section-1', text: 'Sección 1' },
  { id: 'section-2', text: 'Sección 2' },
  { id: 'section-3', text: 'Sección 3' },
  { id: 'section-4', text: 'Sección 4' }
];

export const images_sparkle = [
  { src: "./pics/sparkle_game_0.webp", title: "", description: "" },
  { src: "./pics/sparkle_game_1.webp", title: "", description: "" },
  { src: "./pics/sparkle_game_2.webp", title: "", description: "" },
  { src: "./pics/sparkle_game_3.webp", title: "", description: "" },
  { src: "./pics/sparkle_game_4.webp", title: "", description: "" },
  { src: "./pics/sparkle_game_5.webp", title: "", description: "" },
  { src: "./pics/sparkle_game_6.webp", title: "", description: "" }
];

export const videos_sparkle = [
  {
    url: "./Videos/Sparkle_0.mp4",
    title: "Sparkle",
    description: "...",
    component: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  },
  {
    url: "./Videos/Sparkle_1.mp4",
    title: "Sparkle",
    description: "...",
    component: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  }
];

export const videos_creamyland = [
  {
    url: "./Videos/CreamyLand.mp4",
    title: "Creamy Land",
    description: "...",
    component: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  }
];

export const videos_leveldesign = [
  {
    url: "./Videos/LevelDesign_0.mp4",
    title: "Level Design",
    description: "...",
    component: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  },
  {
    url: "./Videos/LevelDesign_1.mp4",
    title: "Level Design",
    description: "...",
    component: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  }
];

export const videos_switch = [
  {
    url: "./Videos/Switch.mp4",
    title: "Switch",
    description: "...",
    component: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  }
];
