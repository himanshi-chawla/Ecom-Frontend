import logo from './logo.svg';
import './App.css';
import Products from './ProductList/Products';
import Footer from './footer/Footer';
import Navigation from './navigationBar/Navigation';
// import Navigation from './navigationBar/Nnpm i @headlessui/reactnavigation';
// import defaultExport from 'module'

function App() {
  return (
    <div className="">
      {/* <p>Hello</p> */}
      <Navigation/>
      <div>
      <Products/>

      </div>
      <Footer />

    </div>
  );
}

export default App;
