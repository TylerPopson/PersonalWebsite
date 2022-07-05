// import main section components
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import About from "./components/about";
import Tools from "./components/tools";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact"

//import tailwind css document
import './App.css';

//construct the app
function App() {
  return (
    <div className="bg-slate-600">

      {/* navigation bar with logo/name and links down the page */}
      <Navbar/>

      {/* hero banner with profile photo and name/title */}
      <Banner/>

      {/* bio about me and what I do */}
      <About/>

      {/* tools and proficienceies */}
      <Tools/>

      {/* example pieces of my past work */}
      <Portfolio/>

      {/* ways to get ahold of me ie email, linkedin, github, etc. */}
      <Contact/>
    </div>
  );
}

export default App;
