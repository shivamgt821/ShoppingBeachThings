import './App.css';
import Footer from './Components/Footer/Footer';
import Footermain from './Components/Footer/Footermain';
import AdventureNext from './Components/MainComponents/AdventureNext';
import DailyActivity from './Components/MainComponents/DailyActivity';
import EcoWorksSurf from './Components/MainComponents/EcoWorksSurf';
import GrandCoastCollection from './Components/MainComponents/GrandCoastCollection';
import Trending from './Components/MainComponents/Trending';
import NewArrivals from './Components/MainComponents/NewArrivals';
import Navbar from './Components/Navbar/Navbar';
import Space from './Components/Space';
import Video from './Components/Video';
import GetTheGear from './Components/MainComponents/GetTheGear';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Video/>
      <GetTheGear/>
      <DailyActivity />
      <Space />
      <AdventureNext />
      <Space/>
      <EcoWorksSurf />
      <GrandCoastCollection />
      <Space />
      <NewArrivals/>
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
