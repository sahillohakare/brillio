import "./CardsStyle.css";
import React, { useState } from "react";

const ResponsiveCard = (props) => {
  const [progress, setProgress] = useState(0);

  const handleViewClick = () => {
    // Allow increasing the progress only up to 70%
    if (progress < 70) {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 70));
    }
  };
  const handleViewAll = () => {
    document.getElementsByClassName("extra")[0].style.display = "inline-block";
    document.getElementsByClassName("before")[0].style.display = "none";
  };

  return (
    <div className="card-container">
      <div className="info-container">
        <div>
          <strong>Name:</strong> {props.name}
        </div>
        <div>
          <strong>Email:</strong> {props.email}
        </div>
        <div>
          <strong>Phone:</strong> {props.phone}{" "}
          <div className="tags-container ">
            <span className="tag before">
              <small>{props.tags[0]} </small>
              <span
                className="tag-close"
                onClick={() => console.log("Remove Tag 1")}
              >
                &#10006;
              </span>
            </span>{" "}
            <span className="tag before">
              <small>{props.tags[1]}</small>
              <span
                className="tag-close"
                onClick={() => console.log("Remove Tag 2")}
              >
                &#10006;
              </span>
            </span>
            <span className=" tag extra">
              {props.tags.map((tag, index) => {
                return (
                  <div className="tags-container">
                    {" "}
                    <span className="tag">
                      <small>{tag}</small>
                      <span
                        className="tag-close"
                        onClick={() => console.log("Remove Tag 2")}
                      >
                        &#10006;
                      </span>
                    </span>
                  </div>
                );
              })}
            </span>
            <button >view all</button>
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
        <div className="accuracy">{progress}%</div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
