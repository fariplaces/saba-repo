
import Navbar from './Components/Navbar'
import './App.css'
import Mapfunction from './Components/Mapfunction';
import Map1 from './Components/Map1';
import Map2 from './Components/Map2';
import Navbar2 from './Components/Navbar2';

function App() {
  return (
    <>
    <Navbar title="Homes" AboutText="About Us" />
    <Navbar/>
    <Mapfunction/>
   <Map1/>
   <Map2/>
   <Navbar2 title="My Homes" AboutText="About Us" AboutServices="Our Services" AboutContact="Contact Us"/>
   {/* <Navbar2/> */}
   

    </>
  );
}

export default App;
