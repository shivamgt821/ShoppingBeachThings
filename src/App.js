import './App.css';
import AdventureNext from './Components/AdventureNext';
import DailyActivity from './Components/DailyActivity';
import EcoWorksSurf from './Components/EcoWorksSurf';
import Footer from './Components/Footer';
import Footermain from './Components/Footermain';
import GetTheGear from './Components/GetTheGear';
import GrandCoastCollection from './Components/GrandCoastCollection';
import Navbar from './Components/Navbar';
import NewArrivals from './Components/NewArrivals';
import Space from './Components/Space';
import StylingBagPacks from './Components/StylingBagPacks';
import Trending from './Components/Trending';
import Video from './Components/Video';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Video />
      <GetTheGear />
      <DailyActivity />
      <Space />
      <AdventureNext />
      <Space />
      <EcoWorksSurf />
      <GrandCoastCollection />
      <Space />
      <NewArrivals />
      <Space />
      <Trending />
      <Space />
      <Footer />
      <Footermain/>
      {/* <Shopnow /> */}
    </div>
  );
}

export default App;
