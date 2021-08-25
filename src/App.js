import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const myName = "Dominic";
  return (
    <div className="App">
      <Navbar />
      <p>
          { myName } Learns React !!
      </p>
    </div>

  );
}

export default App;
