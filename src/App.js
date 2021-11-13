import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Nav from './Pages/Shared/Navbar/Nav';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import Products from './Pages/Shared/Products/Products';
import Footer from './Pages/Shared/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AuthProvider from './hooks/authProvider'
import About from './Pages/Shared/About/About';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute exact path='/placeOrder/:_id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path='/About'>
              <About></About>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
