import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Cart from "./pages/Statics/Cart";
import Catalog from "./pages/Statics/Catalog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
