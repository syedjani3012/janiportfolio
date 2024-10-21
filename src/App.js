import Home from "./components/Home";
import Navrbar from "./components/Navrbar";
import Socialinks from "./components/socialinks";
import About from "./components/About";
import Portfolio from "./components/MyPortfolio"

function App() {
  return (
    <div>
      <Navrbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Socialinks/>
    </div>
  );
}

export default App;
