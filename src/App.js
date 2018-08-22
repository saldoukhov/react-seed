import React, { Component } from 'react';
import './App.css';
import Loadable from 'react-loadable';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

const LoadableBar = Loadable({
    loader: () => import('./components/Bar'),
    loading() {
        return <div>Loading...</div>
    }
});

const Home = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

// const Home = () => (<div>Home</div>);

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={LoadableBar}/>
        </div>
    </Router>
);

class App extends Component {
  render() {
    return (
      <div className="App">
          <BasicExample/>
      </div>
    );
  }
}

export default App;
