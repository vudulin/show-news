import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store"
import NewsPageContainer from "./containers/NewsPageContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Provider store={store}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/news">News</NavLink>
          <Route exact path="/news">
            <NewsPageContainer />
          </Route >
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
