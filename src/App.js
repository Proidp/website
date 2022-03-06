import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminIndex from "./admin";
import './App.css';
import Registration from "./backend/Registration";
import DataBase from "./DataBase";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signup">
          <Registration/>
        </Route>
        <Route path="/login">
          <AdminIndex/>
        </Route>
        <Route path="/data">
          <DataBase/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
