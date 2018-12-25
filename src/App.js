import React, { Component } from 'react';
import Header from "../src/components/Header/Header";
import Day from "../src/components/Day/Day";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="pageWrapper px-3">
          <Day />
        </div>
        
      </div>
    );
  }
}

export default App;
