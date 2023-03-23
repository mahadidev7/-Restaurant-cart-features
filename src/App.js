import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./app/components/Footer";
import { CartPage, HomePage } from "./app/pages";
import HistoryPage from "./app/pages/HistoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </>
  );
}

export default App;
