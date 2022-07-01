import Navbar from "./components/navbar";
import Banner from "./components/banner";
import About from "./components/about";
import Tools from "./components/tools";
import Portfolio from "./components/portfolio";
import './App.css';

function App() {
  return (
    <div className="bg-slate-600">
      <Navbar/>
      <Banner/>
      <About/>
      <Tools/>
      <Portfolio/>
    </div>
  );
}

export default App;
