import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Wallet from "./pages/wallet/wallet.component";
import Shops from "./pages/shops/shops.component";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/shops" element={<Shops />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
