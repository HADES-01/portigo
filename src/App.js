import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Wallet from "./pages/wallet/wallet.component";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
