import React, { Component } from "react";
import "../styles/index.css";
import { Switch, Route } from "react-router-dom";

//parts
import Header from "../components/Header";
//pages
import Home from "../pages/Home";
import Movie from "../pages/Movie";

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/movie/:id' component={Movie}/>
          </Switch>
        </main>
      </div>
    );
  }
};
