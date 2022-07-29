import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Wallet from "./pages/wallet/wallet.component";
import Shops from "./pages/shops/shops.component";
import Library from "./pages/library";
import "./App.scss";
// import GamePage from "./pages/game";
import GamePage2 from "./pages/game/gamePage2";
import { useEffect, useState } from "react";
import Recommend from "./pages/recommend/recommend";
import VendorAdmin from "./pages/vendor-admin/vendor-admin.component";

function App() {
  const [walletMoney, setWalletMoney] = useState(0);
  const setMoney = (val) => {
    setWalletMoney(val);
    localStorage.setItem("money", val);
  };
  useEffect(() => {
    var localMoney = parseInt(localStorage.getItem("money"));
    console.log(localMoney);
    if (!localMoney) {
      localStorage.setItem("money", 0);
      localMoney = 0;
    }
    setMoney(localMoney);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/wallet"
          element={<Wallet money={walletMoney} addMoney={setMoney} />}
        />
        <Route path="/shops" element={<Shops />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/library/*" element={<Library />} />
        <Route exact path="/recommend" element={<Recommend />} />
        <Route
          exact
          path="/gamePage"
          element={<GamePage2 money={walletMoney} />}
        />
        <Route path="/vendorAdmin" element={<VendorAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
