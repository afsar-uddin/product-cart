import './App.css';
import IncDec from './IncDec';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './ProductDetail/ProductDetail';
import Cart from './Cart/Cart';
import SlickThub from './SlickThub';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IncDec />} />
        <Route path="detail" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <SlickThub />
    // </div>
  );
}

export default App;
