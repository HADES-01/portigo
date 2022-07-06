import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Link from '@mui/joy/Link';
import "./gameCard.styles.scss";

const GameCard = ({ item }) => {
  return (
    <div>
      <Card
            column
            key={item.title}
            variant="outlined"
            sx={{
              gap: 2,
              backgroundColor: "white",
              width: "140px",
              height: "100%",
              // maxWidth: "130px",
              marginRight: "20px",
              padding: "0px",
              paddingBottom: (theme) => theme.spacing(2),
            }}
          >
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 60, overflow: "hidden" }}
            >
              <img
                className="gameThumbnail"
                src={`${item.src}?h=120&fit=crop&auto=format`}
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
              />
            </AspectRatio>
            <Box className="gameDetails" sx={{ whiteSpace: "nowrap" }}>
            <Link
              overlay
              underline="none"
              href="/gamePage"
              sx={{ color: 'text.tertiary' }}
            >
              <Typography className="gameName" fontWeight="md">{item.gameName}</Typography>
            </Link>
              <Typography className="gameCategory" level="body2">{item.gameGenre}</Typography>
            </Box>
          </Card>
    </div>
  );
};

export default GameCard;
