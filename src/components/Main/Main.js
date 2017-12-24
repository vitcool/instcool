import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "../StartPage/StartPage";
import HomePage from "../HomePage/HomePage";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </main>
    );
  }
}

export default Main;
