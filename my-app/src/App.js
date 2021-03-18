import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body'
import About from './components/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div>
        <div className='background'></div>
        <Body />
        <div className='background-2'></div>
        <About />
      </div>
    </div>
  );
}

export default App;
