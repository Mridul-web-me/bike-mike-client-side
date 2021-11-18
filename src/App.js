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
import Reviews from './Pages/Home/ReviewsForm/ReviewsForm';
import ManageBike from './Pages/Dashboard/ManageBikes/ManageBike';
import ManageBooking from './Pages/Dashboard/ManageBooking/ManageBooking';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import AddBike from './Pages/AddBike/AddBike';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import AdminRoute from './Pages/AdminRoute/AdminRoute';

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
            <AdminRoute exact path='/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute exact path='/addbike'>
              <AddBike></AddBike>
            </AdminRoute>
            <PrivateRoute exact path='/placeOrder/:bikeId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path='/payment'>
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute exact path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route exact path='/About'>
              <About></About>
            </Route>
            <PrivateRoute exact path='/review'>
              <Reviews></Reviews>
            </PrivateRoute>
            <AdminRoute exact path='/manageBike'>
              <ManageBike></ManageBike>
            </AdminRoute>
            <AdminRoute exact path='/manageBooking'>
              <ManageBooking></ManageBooking>
            </AdminRoute>
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
