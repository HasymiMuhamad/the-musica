import React from "react";
// import { useStateValue } from "../../contextAPI/StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Body.scss";
import Header from "../header/Header";
import SongRow from "../songRow/SongRow";

const Body = () => {
  // const [{ discover_weekly }] = useStateValue();
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          {/* <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p> */}
          <h2>{'Radja'}</h2>
          <p>{'Musik senja'}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* {
          discover_weekly?.tracks.items.map((item,index) => (
            <SongRow track={item.track} key={index}/>
          ))
        } */}
            <SongRow />
            <SongRow />
            <SongRow />


      </div>
    </div>
  );
};

export default Body;
