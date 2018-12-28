import React, { Component } from 'react';
import Header from "../src/components/Header/Header";
import Today from "../src/components/Today/Today";
import Tomorrow from "../src/components/Tomorrow/Tomorrow";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="pageWrapper px-3 mb-5">
          <form className="menuForm">
            <Today />
            <Tomorrow />
          </form>
          
        </div>
        
      </div>
    );
  }
}

export default App;
