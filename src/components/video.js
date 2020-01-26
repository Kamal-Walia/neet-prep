import React from 'react';

const Video = props => {
    return (
      <div className="videoContainer">
        <div>
          <img src={props.src} alt="neetprep video" height={150} width={200} />
        </div>
        <div className="videoTextContainer">
          <p>{props.title}</p>
          <p>{props.subtitle}</p>
          <p>{props.videoLength}</p>
        </div>
      </div>
    );
  };

export default Video;