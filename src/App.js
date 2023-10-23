
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Trending from './components/Trending';
import Saleoff from './components/Saleoff';
import Blogpost from './components/Blogpost';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Trending/>
     <Saleoff/>
     <Blogpost/>
    </div>
  );
}

export default App;
