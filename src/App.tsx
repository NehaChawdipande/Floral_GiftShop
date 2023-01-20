import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProductList from "./components/ProductList";
import PageNotFound from "./components/PageNotFound";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="my-projects" element={<MyProjects />} />
        <Route path="my-work" element={<MyJourney />} /> */}
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route element={PageNotFound} />
      </Routes>
    </div>
  );
}

export default App;
