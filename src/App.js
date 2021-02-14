/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container" style={{marginBottom: "50px"}}>
        <Switch>
          <Route path="/" exact component={Contacts} />
          <Route path="/addnew" exact component={AddContact} />
          <Route path="/default" render={() => <Redirect to="/" />} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
