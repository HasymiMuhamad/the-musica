import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.scss";

const Header = ({searchData, handleSearch, menu}) => {

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder={ menu.includes('song') ? "Search for Songs" : "Search for Artists"}
          type="text"
          value={searchData}
          onChange={(event)=> handleSearch(event)}
        />
      </div>
    </div>
  );
};

export default Header;
