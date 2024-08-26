import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import "./sass/sassStyles/_global.scss"
function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <HeroSection/>
      </div>
    </>
  );
}

export default App;
