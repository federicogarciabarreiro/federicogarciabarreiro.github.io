import { ProgressBar } from 'react-bootstrap';

import "../styles/CustomScrollProgressBar.css";

{/*CustomScrollProgressBar recibe scrollPercentage y permite un seguimiento visual del calor de desplazamiento.*/}

const CustomScrollProgressBar = ({ scrollPercentage }) => {
    const progressBarClass = scrollPercentage > 10 ? 'visible' : 'hidden';

    return (
        <div className={`progress-bar-container ${progressBarClass}`}>
            <ProgressBar now={scrollPercentage} />
        </div>
    );
};

export default CustomScrollProgressBar;
