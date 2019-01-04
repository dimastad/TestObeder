import React, { Component } from 'react';
import Header from "../src/components/Header/Header";
import Today from "../src/components/Today/Today";
import Tomorrow from "../src/components/Tomorrow/Tomorrow";
import EntryForm from "../src/components/EntryForm/EntryForm";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <input id='choice' type="checkbox" className="choice" defaultChecked/>
        <div className="mainWrapper">
          <Header />
          <div className="pageWrapper px-3 mb-5">
            <div className="menuFormWrapper">
              <Today />
              <Tomorrow />
            </div>
          </div>
        </div>
        <EntryForm />
      </div>
    );
  }
}

export default App;
