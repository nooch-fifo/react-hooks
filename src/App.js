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
import Auth0Page from './Components/Auth0/Auth0Page';
import ProtectedRoute from './Components/Auth0/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/adminDom"><Auth0Page /></Route>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/posts"><BlogPosts /></Route>
          <Route exact path="/post/:slug"><ReadPost /></Route>
          <ProtectedRoute path="/addPost" component={CreatePost} />
          <ProtectedRoute path="/editPosts" component={EditPosts} />
          <Route exact path="/updatePost/:id"><UpdatePost /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
