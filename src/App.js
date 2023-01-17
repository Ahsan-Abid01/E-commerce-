import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section from "./Components/Section";
import {Route, Routes} from 'react-router-dom'
import Shop from "./Components/Shop/Shop";
import SingleProduct from "./Components/Shop/SingleProduct";
import Cart from "./Components/Shop/Cart";
import CheckOut from "./Components/CheckOut";
function App() {
  return (
    <div className="App">

    <Header/>
      <Routes>
    <Route path="/" element={<Banner/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/view/product/:id" element={<SingleProduct/>}/>
    <Route path="/product/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<CheckOut/>}/>


      </Routes>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
