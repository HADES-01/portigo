import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./category.styles.scss";
import { capitalize } from "@mui/material";
import gamesList from "../../data/gamesList";
import GameCard from "../../components/gameCard";

function Category() {
  const param = useParams();
  const navigate = useNavigate();
  const category = capitalize(param.category);
  return (
    <div className="category">
      <div className="category__header">
        <p className="back_button" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </p>
        <h3>{category} Games</h3>
      </div>
      <div className="category__grid">
        {gamesList
          .filter((game) => game.genreName === category)[0]         
          .games.map((game, idx) => (
            <GameCard item={game} key={idx} />
          ))}
      </div>
    </div>
  );
}

export default Category;
