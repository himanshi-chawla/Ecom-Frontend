import logo from './logo.svg';
import './App.css';
import Products from './components/ProductList/Products';
import Footer from './components/footer/Footer';
import Navigation from './components/navigationBar/Navigation';
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
