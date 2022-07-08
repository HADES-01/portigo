import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Link from "@mui/joy/Link";
import "./gameCard.styles.scss";

const GameCard = ({ item }) => {
  return (
    <Card column key={item.title} className="library__card" id="card">
      <img
        className="library__card-thumbnail"
        src={`${item.src}?h=1800`}
        srcSet={`${item.src}?h=180&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
      />
      <Box className="library__card-details">
        <Link overlay underline="none" href="/gamePage">
          <p className="library__card-name" fontWeight="md">
            {item.gameName}
          </p>
        </Link>
        <Typography className="library__card-category" level="body2">
          {item.gameGenre}
        </Typography>
      </Box>
    </Card>
  );
};

export default GameCard;
