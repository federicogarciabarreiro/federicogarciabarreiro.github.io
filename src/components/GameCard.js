import React, { useState } from 'react';
import GameIFrame from './GameIFrame';

function GameCard({ gameTitle, gameEmbed, maxWidth }) {
    const [isCardOpen, setIsCardOpen] = useState(false);

    const handleCardClick = () => {
        setIsCardOpen(!isCardOpen);
    };

    return (
        <div style={{ marginBottom: isCardOpen ? '20px' : '0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div className="card text-center" style={{ width: '18rem', margin: '20px', cursor: 'pointer' }} onClick={handleCardClick}>
                    <div className="card-body">
                        <h5 className="card-title">{gameTitle}</h5>
                        <p className="card-text">Haz clic para jugar</p>
                    </div>
                </div>
            </div>
            {isCardOpen && (
                <div className="card" style={{ maxWidth: `${maxWidth}px`, margin: '0 auto', marginTop: '20px' }}>
                    <div className="card-body" style={{ padding: 0 }}>
                        <GameIFrame title={gameTitle} embed={gameEmbed} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameCard;
