import './App.css';
import Navbar from './Components/Navbar';
import BlogPosts from './Components/BlogPosts';
import Footer from './Components/Footer';
import Home from './Components/Home';
import CreateBlog from './Components/CreateBlog';
import ReadBlog from './Components/ReadBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from 'react-router-dom';
import Auth0Page from './Components/Auth0/Auth0Page';
import ProtectedRoute from './Components/Auth0/ProtectedRoute';
import EditBlogs from './Components/EditBlogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/adminDom"><Auth0Page /></Route>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/posts"><BlogPosts /></Route>
          <Route exact path="/post/:slug"><ReadBlog /></Route>
          {/* DISABLING PROTECTED ROUTES FOR NOW UNTIL NEW Auth0 */}
          {/* <ProtectedRoute path="/addPost" component={CreatePost} /> */}
          <Route exact path="/newBlog"><CreateBlog /></Route>
          {/* <ProtectedRoute path="/editPosts" component={EditPosts} /> */}
          <Route exact path="/editBlogs"><EditBlogs/></Route>
          <Route exact path="/updateBlog/:id"><CreateBlog/></Route>
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
