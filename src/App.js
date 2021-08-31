import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import LatestPost from './Components/LatestPost';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <LatestPost />
      <Footer />
    </div>

  );
}

export default App;
