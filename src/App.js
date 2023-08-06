import { Routes , Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
      <div className="bg-slate-900"> 
        <Navbar/>
      </div>
       <div className="">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
       </div>
       <div>
        <Footer/>
       </div>
    </div>
  );
}

export default App;
