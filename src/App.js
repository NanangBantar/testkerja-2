import CssBaseline from '@mui/material/CssBaseline';
import Topbar from "./components/Topbar.js";
import Hero from "./components/Hero.js";
import Category from './components/Category.js';
import Trending from "./components/Trending.js";
import Info from "./components/Info.js";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/slickStyled.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Topbar />
      <Hero />
      <Category />
      <Trending />
      <Info />
    </>
  );
}

export default App;
