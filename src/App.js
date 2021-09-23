import './App.css';
import Navbar from './Components/Navbar';
import BlogPosts from './Components/BlogPosts';
import Footer from './Components/Footer';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import EditPosts from './Components/EditPosts';
import UpdatePost from './Components/UpdatePost';
import ReadPost from './Components/ReadPost';
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
          <Route exact path="/post/:slug"><ReadPost /></Route>
          <Route exact path="/addPost"><CreatePost /></Route>
          <Route exact path="/editPosts"><EditPosts /></Route>
          <Route exact path="/updatePost/:id"><UpdatePost /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
