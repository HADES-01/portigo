import React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import GameCard from "../gameCard";
import "./libraryGrid.styles.scss";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const LibraryGrid = ({ categoryName, dataList }) => {
  const navigation = useNavigate();
  return (
    <div className="library__grid">
      <div className="library__grid-header" onClick={() => navigation(`${categoryName.toLowerCase()}`)}>
        <h3>{categoryName}</h3>
        <p><ChevronRightIcon /></p>
      </div>
      <Box className="library__grid-carousel">
        {dataList.map((item, index) => (
          <GameCard key={index} item={item}></GameCard>
        ))}
      </Box>
    </div>
  );
};

export default LibraryGrid;
