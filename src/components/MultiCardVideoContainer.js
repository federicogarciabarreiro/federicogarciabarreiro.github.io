import CollapsedVideoCard from './CollapsedVideoCard';

{/*CustomVideoCardContainer recibe un array objetos definida en constants.js*/}
{/*CustomVideoCardContainer permite organizar una serie de videos en una unica fila.*/}

function MultiCardVideoContainer({ videos }) {
  return (
    <>
          {videos.map((video, index) => (
            <div key={index} >
              <CollapsedVideoCard
                url={video.url}
                title={video.title}
                description={video.description}
                component={video.component}
              />
            </div>
          ))}
    </>
  );
}

export default MultiCardVideoContainer;
