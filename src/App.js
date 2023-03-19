
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CartPage, HomePage } from './app/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cartpage" element={<CartPage />} />
    </Routes>
  );
}

export default App;
