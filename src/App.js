import './App.css';
import Navbar from './Components/Navbar';
import BlogPosts from './Components/BlogPosts';
import Footer from './Components/Footer';
import BlogHome from './Components/BlogHome';
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
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/adminDom"><Auth0Page /></Route>
          {/* Working on new Landing Page */}
          {/* <Route exact path="/"><LandingPage /></Route> */}
          <Route exact path="/"><BlogHome /></Route>
          <Route exact path="/posts"><BlogPosts /></Route>
          <Route exact path="/post/:slug"><ReadBlog /></Route>
          {/* DISABLING PROTECTED ROUTES FOR NOW UNTIL NEW Auth0 */}
          <ProtectedRoute path="/addPost" component={CreateBlog} />
          {/* <Route exact path="/newBlog"><CreateBlog /></Route> */}
          <ProtectedRoute path="/editPosts" component={EditBlogs} />
          {/* <Route exact path="/editBlogs"><EditBlogs/></Route> */}
          <Route exact path="/updateBlog/:id"><CreateBlog/></Route>
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
