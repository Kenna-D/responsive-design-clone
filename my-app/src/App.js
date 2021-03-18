import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='background'></div>
      <Header />
      <Nav />
      <Body />
    </div>
  );
}

export default App;
