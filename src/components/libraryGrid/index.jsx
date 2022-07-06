import React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
import GameCard from "../gameCard";
import "./libraryGrid.styles.scss"

const libraryGrid = ({ categoryName, dataList }) => {
  return (
    <div>
      <p className="gameCategoryName">{categoryName}</p>
      <Box
      className="libraryCarousel"
        sx={{
          display: "flex",
          gap: 1,
          py: 1,
          overflow: "auto",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {dataList.map((item, index) => (
          <GameCard key={index} item={item}>
          </GameCard>
        ))}
      </Box>
    </div>
  );
};

export default libraryGrid;
