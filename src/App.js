import Home from "./components/Home";
import Navrbar from "./components/Navrbar";
import Socialinks from "./components/socialinks";
import About from "./components/About";
import Portfolio from "./components/MyPortfolio"
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navrbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Socialinks/>
    </div>
  );
}

export default App;
