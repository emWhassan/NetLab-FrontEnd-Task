import { faAngleRight, faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../../styles/tile.css"

export const Tile = (props) => {
  const {title, description, type, onPress} = props;

  return (
    <>
      <div className={`tile ${type}`} onClick={onPress}>
        <div className='tile-heading'>
          <h5>{title}</h5>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <p>{description}</p>
      </div>
    </>
  )
}

export default Tile;