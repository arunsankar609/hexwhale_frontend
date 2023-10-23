
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Trending from './components/Trending';
import Saleoff from './components/Saleoff';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Trending/>
     <Saleoff/>
    </div>
  );
}

export default App;
