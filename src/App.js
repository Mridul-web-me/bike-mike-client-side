import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Nav from './Pages/Shared/Navbar/Nav';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import Products from './Pages/Home/Products/Products';
import Footer from './Pages/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/morebikes'>
            <Products></Products>
          </Route>
          <Route exact path='/placeOrder/:_id'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='*'>

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
