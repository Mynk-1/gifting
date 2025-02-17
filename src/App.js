import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../src/Store/Store';
import HomePage from "../src/Pages/HomePage/HomePage/HomePage";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductCatalog from "./Pages/ProductCatalog/ProductCatalog";
import Profile from "./Pages/Login/Profile";
// import Login from "./Pages/Login/Login";

import Navigation from "./Pages/Navbar/Navbar";
import MobileNavBar from "./Pages/Navbar/MobBottomNav";
import Footer from "./Pages/Footer/Footer";
import CustomProductDetail from "./Pages/ProductDetail/CustumProductDetail/ProductDetail.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail/ProductDetail.jsx"


function App() {
  return (
    <div>
      <Provider store={store}>
      <div className="bg-black text-white text-center py-1 lg-p-2 text-lg font-semibold font-titillium">
        Get extra 10% off on all the products.....
      </div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<Profile />} />
        <Route path="/:category/:id" element={<ProductDetail />} />
        <Route path="/productcatalog/:category" element={<ProductCatalog />} />
        <Route path="/customize/:category" element={<CustomProductDetail />} />
      </Routes>

      <Footer />
      <MobileNavBar/>
      </Provider>
    </div>
  );
}


const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
