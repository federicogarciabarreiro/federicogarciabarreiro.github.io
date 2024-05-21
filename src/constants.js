{/*Elementos adicionales.*/ }
import CustomButton from './components/CustomButton';
import CustomSection from './components/CustomSection';
import CustomCarousel from './components/CustomCarousel';
import CustomGameCard from './components/CustomGameCard';
import CustomVideoCardContainer from './components/CustomVideoCardContainer';

export const sections = [
  { id: 'section-0', text: 'Sección 0' },
  { id: 'section-1', text: 'Sección 1' },
  { id: 'section-2', text: 'Sección 2' },
  { id: 'section-3', text: 'Sección 3' },
  { id: 'section-4', text: 'Sección 4' }
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
    component: <CustomButton buttonLabel={"Ver más"} buttonUrl={""} />
  },
  {
    url: "./Videos/Sparkle.mp4",
    title: "Título del video",
    description: "Descripción del video"
  }
];

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

export const tabs = [
  {
    eventKey: "section-1",
    title: "Seccion 1",
    content: (
      <section id='section-1'>
         <CustomSection children={
            <CustomGameCard
              gameTitle={"Sediento"}
              gameEmbed={"./Sediento/game.html"}
              buttonText={"Clicka!"}
              maxWidth={600}
            />
          } />
        <CustomVideoCardContainer
          videos={videos}
        />
      </section>
    )
  },
  {
    eventKey: "section-2",
    title: "Seccion 2",
    content: (
      <>
        <section id='section-1'>
          <CustomSection children={
            <CustomGameCard
              gameTitle={"Sediento"}
              gameEmbed={"./Sediento/game.html"}
              buttonText={"Clicka!"}
              maxWidth={600}
            />
          } />
        </section>
        <section id='section-2'>
          <CustomVideoCardContainer
            videos={videos}
          />
        </section>
      </>
    )
  },
  {
    eventKey: "section-3",
    title: "Seccion 3",
    content: (
      <>
        <section id='section-1'>
          <CustomCarousel
            images={images}
          />
        </section>
        <section id='section-2'>
          <CustomSection children={
            <CustomGameCard
              gameTitle={"Sediento"}
              gameEmbed={"./Sediento/game.html"}
              buttonText={"Clicka!"}
              maxWidth={600}
            />
          } />
        </section>
        <section id='section-3'>
          <CustomVideoCardContainer
            videos={videos}
          />
        </section></>
    ),
    disable: true
  }
];
