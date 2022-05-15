import React from "react";
import "./Sidebar.scss";
import SidebarOption from "./../sidebarOption/SidebarOption";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const Sidebar = ({handleChangeMenu}) => {

  return (
    <div className="sidebar">
          <strong className='sidebar__logo'>THE MUSICA</strong>
          <SidebarOption
            Icon={LibraryMusicIcon}
            option='Top Songs'
            name='songs'
            handleChangeMenu={handleChangeMenu}
          />
          <SidebarOption
            Icon={LibraryMusicIcon}
            option='Top Artist'
            name='artists'
            handleChangeMenu={handleChangeMenu}
          />
          <SidebarOption
            Icon={SearchIcon}
            option='Search by Song Title'
            name='search-song'
            handleChangeMenu={handleChangeMenu}
          />
          <SidebarOption
            Icon={SearchIcon}
            option='Search by Artist'
            name='search-artist'
            handleChangeMenu={handleChangeMenu}
          />
          <br />
          <hr />
    </div>
  );
};

export default Sidebar;
