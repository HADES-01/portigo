import React from "react";
import LibraryGrid from "../../components/libraryGrid";
import gamesList from "../../data/gamesList";

import "./library.styles.scss";

const library = () => {
  return (
    <div className="library">
        <h1 className="heading">From Casual to AAA. <br/> All games on your device. </h1>
        <p> It's that simple.</p>
        {gamesList.map((list, index) => {
          return (
            <LibraryGrid key={index} categoryName={list.genreName} dataList={list.games} />
          )
        })}

    </div>
  );
}

export default library;
