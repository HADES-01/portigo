import { useState } from "react";
import LibraryGrid from "../../components/libraryGrid";
import gamesList from "../../data/gamesList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../library/library.styles.scss";
import { recommend_action, recommend_kids } from "../../data/gamesList";
import { useEffect } from "react";

function Recommend() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const onChange = (e) => {
    if (!filters.includes(e.target.name))
      setFilters([...filters, e.target.name]);
    else setFilters(filters.filter((el) => el !== e.target.name));
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const filterGames = () => {
    var new_gamesList = [...gamesList];
    if (filters.includes("Action") && filters.includes("Kids")) {
      var recommend = recommend_action.games.filter((el, idx) => idx < 4);
      recommend = [
        ...recommend,
        ...recommend_kids.games.filter((el, idx) => idx < 4),
      ];
      recommend.sort(() => Math.random() - 0.5);
      var recommend_mix = { ...recommend_action };
      recommend_mix.games = recommend;
      console.log(recommend_mix);
      new_gamesList.unshift(recommend_mix);
    } else if (filters.includes("Action"))
      new_gamesList.unshift(recommend_action);
    else if (filters.includes("Kids")) new_gamesList.unshift(recommend_kids);

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
          {!open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </p>
      </div>
      {open && (
        <div className="wallet__history-search">
          <input
            type="checkbox"
            name="Action"
            id="action"
            onChange={onChange}
          />
          <label htmlFor="action">Action</label>
          <input type="checkbox" name="Kids" id="kids" onChange={onChange} />
          <label htmlFor="kids">Kids</label>
        </div>
      )}
      <div className="library__games">
        {categories.length ? categories : <p> OOPSS!!! Not Found </p>}
      </div>
    </div>
  );
}

export default Recommend;
