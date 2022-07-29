import { useState } from "react";
import LibraryGrid from "../../components/libraryGrid";
import gamesList from "../../data/gamesList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Route, Routes } from "react-router";
import Link from "@mui/joy/Link";
import "./library.styles.scss";
import Category from "../category/category.component";
import AdBanner from "../../components/adBanner/adBanner.component";
import LoginPopup from "../../components/login-popup/login-popup.component";

const Library = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
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
      <div className="library__footer">
        <button>
          <Link href="/shops">
            Get Coupons
            {/* <RedeemIcon /> */}
          </Link>
        </button>
        <button>
          <Link href="/wallet">
            {/* <CurrencyRupeeIcon /> */}
            Add Money
          </Link>
        </button>
      </div>
      <AdBanner handleOpen={() => setOpenModal(true)}/>
      <LoginPopup open={openModal} handleClose={() => setOpenModal(false)} dest="shops"/>
    </div>
  );
};

const library = () => {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default library;
