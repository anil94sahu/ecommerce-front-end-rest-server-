import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {isUserLoggedIn} from './actions';
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home}></PrivateRoute>
          <PrivateRoute path="/products"  component={Products}></PrivateRoute>
          <PrivateRoute path="/orders"  component={Orders}></PrivateRoute>
          <PrivateRoute path="/category"  component={Category}></PrivateRoute>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
