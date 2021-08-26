import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';

function App() {
  const myName = "Dominic";
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <p>
          { myName } Learns React !!
      </p>
    </div>

  );
}

export default App;
