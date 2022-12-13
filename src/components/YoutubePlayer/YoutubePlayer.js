import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from "react-player";
import "../../styles/youtube.css";
import { loadImage } from '../../utils/common';

export const YouTubePlayer = (props) => {
  const { title, description, image, src } = props;
  const [play, setPlay] = useState(false);
  const [containerWidth, setContainerWidth] = useState();
  const ref = useRef(null);

  useEffect(() => {
    if(ref.current || containerWidth)
      setContainerWidth(ref.current.clientWidth)
  }, [containerWidth])

  const handleYouTubeClick = () => {
    setPlay(true);
  };

  return (
    <div className='video'>
      {!play 
        ? <div ref={ref} className='img-container' onClick={handleYouTubeClick}>
            <img src={image} alt="" />
            <div className='play-icon'>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
        : <ReactPlayer 
            url={src} 
            muted={true} 
            playing={true} 
            controls={false}
            pip={false}
            width={containerWidth}
          />
      }
      <div className='content-section'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  );

}
export default YouTubePlayer;
