import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import AddProduct from "./pages/AddProduct";
import ListProducts from "./pages/ListProducts";

import "./App.css";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/ListProducts" element={<ListProducts />} />
          <Route path="/EditProduct" element={<EditProduct />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
