import './CardsStyle.css';
import React, { useState } from 'react';


const ResponsiveCard = () => {
  const [progress, setProgress] = useState(0);

  const handleViewClick = () => {
    // Allow increasing the progress only up to 70%
    if (progress < 70) {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 70));
    }
  };

  return (
    <div className="card-container">
      <div className="info-container">
        <div>
          <strong>Name:</strong> Atharva Gosavi
        </div>
        <div>
          <strong>Email:</strong> gosaviatharva9@gmail.com
        </div>
        <div>
          <strong>Phone:</strong> +91 7083761920{' '}
          <div className="tags-container">
            <span className="tag">
              <small>Tag 1</small>
              <span className="tag-close" onClick={() => console.log('Remove Tag 1')}>
                &#10006;
              </span>
            </span>{' '}
            <span className="tag">
              <small>Tag 2</small>
              <span className="tag-close" onClick={() => console.log('Remove Tag 2')}>
                &#10006;
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="view-button" onClick={handleViewClick}>
          View
        </button>
        <div className="progress-bar">
          <div style={{ width: `${progress}%` }}></div>
        </div>
        <div className="accuracy">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
