import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Wallet from "./pages/wallet/wallet.component";
import Shops from "./pages/shops/shops.component";
import Library from "./pages/library";
import "./App.scss";
import GamePage from "./pages/game";

function App() {
  return (
    <BrowserRouter basename="portigo/">
      <Routes>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/shops" element={<Shops />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/library" element={<Library />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/gamePage" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
