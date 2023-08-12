import './App.css';
import Home from './Home';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
