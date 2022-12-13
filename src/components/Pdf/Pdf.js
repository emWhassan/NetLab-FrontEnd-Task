import React from 'react';
import "../../styles/pdf.css";

export const Pdf = (props) => {
  const {title, description, image, onPress} = props;

  return (
    <>
      <div className={`pdf`}>
        <div className='image-section'>
          <img src={image} alt='' />
        </div>
        <div className='content-section'>
          <h5 onClick={onPress}>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Pdf;