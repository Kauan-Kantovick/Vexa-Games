import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Statics/Cart";
import Catalog from "./pages/Statics/Catalog";
import GamePage from "./pages/Dinamics/GamePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/gamepage/:id" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
