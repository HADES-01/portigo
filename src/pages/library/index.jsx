import React from "react";
import LibraryGrid from "../../components/libraryGrid";
import gamesList from "../../data/gamesList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

import "./library.styles.scss";

const library = () => {
  return (
    <div className="library">
      <div className="library__header">
        <p>
          <ArrowBackIcon />
        </p>
        <h3>Game's Library </h3>
        <p>
          <SearchIcon />
        </p>
      </div>
      {/* From Casual to AAA. <br /> All games on your device.
      <p> It's that simple.</p> */}
      {gamesList.map((list, index) => {
        return (
          <LibraryGrid
            key={index}
            categoryName={list.genreName}
            dataList={list.games}
          />
        );
      })}
    </div>
  );
};

export default library;
