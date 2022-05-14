import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useQuery } from 'react-query'
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { SERVICES } from "../../configs";
import "./Body.scss";
import Header from "../header/Header";
import SongRow from "../songRow/SongRow";


const Body = ({menu}) => {
  const { data : artistsData } = useQuery('artistsData', () =>
    fetch(SERVICES.GET_TOP_ARTIST)
    .then(res =>
      res.json()
    )
  )
  const { data : songsData } = useQuery('songsData', () =>
    fetch(SERVICES.GET_TOP_TRACK)
     .then(res =>
       res.json()
    )
  )

  return (
    <div className="body">
      {
        menu === 'search' && <Header />
      }

      {
        menu !== 'search' && (
          <div>
            <h2 class="body__songs__title">{'Trending'}</h2>
            <div className="body__info">
              <img src={'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='} alt="" />
              <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>{'Radja'}</h2>
                <p>{'Musik senja'}</p>
              </div>
            </div>
          </div>
        )
      }


      <div className="body__songs">
        {
          menu !== 'search' && (
            <div className="body__icons">
              <PlayCircleFilledIcon className="body__shuffle" />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>
          )
        }
        {
          menu === 'songs' && (
            <div>
              <h2 class="body__songs__title">{'Top Songs'}</h2>
              {
                songsData?.tracks.track.map((item,index) => (
                  <SongRow item={item} key={index}/>
                ))
              }
            </div>
          )
        }
        {
          menu === 'artists' && (
            <div>
              <h2 class="body__songs__title">{'Top Artists'}</h2>
              {
                artistsData?.artists?.artist.map((item,index) => (
                  <SongRow item={item} key={index}/>
                ))
              }
            </div>
          )
        }
        {
          menu === 'search' && (
            <div>
              {/* <h2 class="body__songs__title">{'Top Artists'}</h2> */}
              {
                artistsData?.artists?.artist.map((item,index) => (
                  <SongRow item={item} key={index}/>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Body;
