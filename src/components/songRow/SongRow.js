import React from "react";
import "./SongRow.scss";

const SongRow = ({ item }) => {
  let imageUrl = 'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png';
  return (
    <div className="songRow">
      <img className='songRow__album' src={imageUrl} alt="image" />
      <div className="songRow__info">
        <h1>{item.name}</h1>
        <p>
          {`${item?.artist?.name
            ? item?.artist?.name + ' ' + '-' + ' '
            : ''}  
            ${item.listeners} listeners`
          }
        </p>
      </div>
    </div>
  );
};

export default SongRow;
