import React, {useEffect, useState} from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { SERVICES } from "../../configs";
import { GetMusicArtist, GetMusicList } from "../../api/music/music";
import "./Body.scss";
import Header from "../header/Header";
import SongRow from "../songRow/SongRow";


const Body = ({menu}) => {
  const [searchData, setSearchData] = useState('');
  const [trackResult, setTrackResult] = useState([]);
  const [artistResult, setArtistResult] = useState([]);
  let sampleImage = 'https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a';

  const artistsData = GetMusicArtist();
  const songsData = GetMusicList();

  useEffect(()=> {
      fetch(SERVICES.SEARCH_TRACK(searchData))
        .then(res => res.json())
        .then( res => {
          setTrackResult(res.results.trackmatches.track)
        })

      fetch(SERVICES.SEARCH_ARTIST(searchData))
        .then(res => res.json())
        .then( res => {
          setArtistResult(res.results.artistmatches.artist)
        })
  },[searchData])

  const handleSearch = (event)=> {
    setSearchData(event.target.value);
  }

  return (
    <div className="body">
      {
        menu.includes('search') && (
          <Header
            handleSearch={handleSearch}
            searchData={searchData}
            menu={menu}
          />
        )
      }

      {
        !menu.includes('search') && (
          <div>
            <h2 class="body__songs__title">{'Trending'}</h2>
            <div className="body__info">
              <img src={sampleImage} alt="image1" />
              <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>{'Justin Bieber'}</h2>
                <p>{'My World 2.0'}</p>
              </div>
            </div>
          </div>
        )
      }


      <div className="body__songs">
        {
          !menu.includes('search') && (
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
          menu === 'search-song' && (
            <div>
              <h2 class="body__songs__title">
                {`Result for keyword : ${searchData}`}
              </h2>
              {
                trackResult.map((item,index) => (
                  <SongRow item={item} key={index}/>
                ))
              }
            </div>
          )
        }
        {
          menu === 'search-artist' && (
            <div>
              <h2 class="body__songs__title">
                {`Result for keyword : ${searchData}`}
              </h2>
              {
                artistResult.map((item,index) => (
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
