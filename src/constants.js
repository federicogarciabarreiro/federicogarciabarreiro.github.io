{/*Paginas*/ }
import Home from './pages/Home';
import Game from './pages/Game';

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

export const gamePics = [
  [
    { src: "./pics/sparkle_game_0.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_1.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_2.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_3.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_4.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_5.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_6.webp", title: "", description: "" }
  ],
  [
    { src: "./pics/sparkle_game_0.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_1.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_2.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_3.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_4.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_5.webp", title: "", description: "" },
    { src: "./pics/sparkle_game_6.webp", title: "", description: "" }
  ]
];


export const games = [{ url: "./videos/CreamyLand.mp4",
title: "Creamy Land",
description: "Juego de plataformas 2D.",
buttonLabel: "Oh vaya, muestrame mas!",
onClickNavigate: "/game"},
];

export const parallaxImages = [
  { imgSrc: '/pics/Layer4.webp', imgSpeed: 0.75, imgOffsetX: 0, imgOffsetY: 0, repeatX: true },
  { imgSrc: '/pics/Layer3.webp', imgSpeed: -0.9, imgOffsetX: 0, imgOffsetY: 0, repeatX: true },
  { imgSrc: '/pics/Layer2.webp', imgSpeed: -1.5, imgOffsetX: 0, imgOffsetY: 100, repeatX: true },
  { imgSrc: '/pics/Layer1.webp', imgSpeed: -0.3, imgOffsetX: 0, imgOffsetY: 0, repeatX: true },
  { imgSrc: '/pics/Layer0.webp', imgSpeed: 1.5,  imgOffsetX: 0, imgOffsetY: 0, repeatX: true }
];

