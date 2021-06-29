import logo from './logo.svg';
import './App.css';
import Sayac from './Sayac';
import RedButton from './RedButton';
import Homepage from './Homepage';
import Dog from './Dog';
import About from './About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
         <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/sayac1">sayac1</Link>
            </li>
            <li>
              <Link to="/sayac2">sayac2</Link>
            </li>
            <li>
              <Link to="/redbutton">redbutton</Link>
            </li>
          </ul>
          <Switch>
          <Route exact path="/">
            <Dog />
          </Route>
          <Route path="/sayac1">
            <Sayac id="1" />
          </Route>
          <Route path="/sayac2">
            <Sayac id="2"/>
          </Route>
          <Route path="/redbutton/:id">
            <RedButton buttonName="Red"><a href="https://www.w3schools.com">limk 1</a></RedButton>
            <RedButton buttonName="Blue"><a href="https://www.w3schools.com">limk 2</a></RedButton>
            <RedButton buttonName="Purple"><a href="https://www.w3schools.com">limk 3</a></RedButton>
            <RedButton buttonName="Orange"><a href="https://türkçebul.com">limk 4</a></RedButton>
          </Route>
          
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
