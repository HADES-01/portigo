import { useState } from "react";
import LibraryGrid from "../../components/libraryGrid";
import gamesList from "../../data/gamesList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./library.styles.scss";

const Library = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const filterGames = () => {
    var temp_gamesList = [...gamesList];
    var new_gamesList = temp_gamesList.map((category) => {
      var cat = { ...category };
      cat.games = category.games.filter((game) => {
        return game.gameName.toLowerCase().includes(search.toLowerCase());
      });
      return cat;
    });
    console.log(gamesList);
    return new_gamesList;
  };
  const categories = filterGames().map((list, index) => {
    return list.games.length ? (
      <LibraryGrid
        key={index}
        categoryName={list.genreName}
        dataList={list.games}
      />
    ) : null;
  });
  return (
    <div className="library">
      <div className="library__header">
        <p className="back_button" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </p>
        <h3>Games Library </h3>
        <p
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? <SearchIcon /> : <ExpandLessIcon />}
        </p>
      </div>
      {open && (
        <div className="wallet__history-search">
          <input
            type="text"
            placeholder="Search Games ...."
            value={search}
            onChange={onChange}
          />
        </div>
      )}
      <div className="library__games">
        {categories.length ? categories : <p> OOPSS!!! Not Found </p>}
      </div>
    </div>
  );
};

export default Library;
