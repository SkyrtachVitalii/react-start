import './App.scss';
import AsideMenu from './components/AsideMenu/AsideMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Contacts from './views/Contacts/Contacts';
import Cabinet from './views/Cabinet/Cabinet';
import Review from './views/Review/Review';
import NotFound404 from './views/NotFound404/NotFound404';
import ProductItem from './views/Products/ProductItem';



function App() {


  return (
    <Router>
      <div className="App">
        <AsideMenu />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<ProductItem />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/cabinet" element={<Cabinet />} />
            <Route exact path="/products/:productId/review/:reviewId" element={<Review />} />
            <Route exact path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
