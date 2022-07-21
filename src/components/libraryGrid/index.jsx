import React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import GameCard from "../gameCard";
import "./libraryGrid.styles.scss";

const libraryGrid = ({ categoryName, dataList }) => {
  return (
    <div className="library__grid">
      <div className="library__grid-header">
        <h3>{categoryName}</h3>
        {/* <p>More > </p> */}
      </div>
      <Box className="library__grid-carousel">
        {dataList.map((item, index) => (
          <GameCard key={index} item={item}></GameCard>
        ))}
      </Box>
    </div>
  );
};

export default libraryGrid;
