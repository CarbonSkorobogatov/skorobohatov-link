import './App.css';
import Cube from './components/Cube';


function App() {
  return (
    <div className="App">
        <div className="item_1">
        <h1 className="neon">Skorobohatov Sviatoslav</h1>
        <a href="https://www.instagram.com/sc.svv/" className="Links">Instagram</a>
        <a href="https://www.tiktok.com/@skorobohatov?" className="Links">Tik - Tok</a>
        <a href="https://t.me/skorobohatov" className="Links">Telegram</a>
        </div>
        <div className="item_2">
          <Cube className="cube" />
        </div>
    </div>
  );
}

export default App;
