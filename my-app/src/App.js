import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import LoginSighnup from './Pages/LoginSighnup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/' element = {<Shop/>}/>
        <Route path ='/mens' element = {<ShopCategory category = "mens"/>}/>
        <Route path ='/Womens' element = {<ShopCategory category ="women"/>}/>
        <Route path ='/kids' element = {<ShopCategory category = "kid"/>}/>
        <Route path='Product' element = {<Product/>}/>
        <Route path='ProductID' element = {<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element = {<LoginSighnup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
