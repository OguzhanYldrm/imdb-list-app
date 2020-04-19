import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Films from "../screens/Film"
import Favs from "../screens/Fav"

class Home extends Component {
  render() {
    return (
      <Router >
        <>
          <Switch>
            <Route exact path='/'
              component={Films} />

            <Route path='/favs'
              component={Favs} />

          </Switch>
        </>
      </Router>
    );
  }
}

export default Home;
