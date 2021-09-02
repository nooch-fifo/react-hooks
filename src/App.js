import './App.css';
import Navbar from './Components/Navbar';
import BlogPosts from './Components/BlogPosts';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/posts"><BlogPosts /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
