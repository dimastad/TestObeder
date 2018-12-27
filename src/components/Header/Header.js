import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="logo-wrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="logo-title">obeder</span>
                </div>
                

                <div className="checkbox-toggle">
                    <label htmlFor="choice" className="not-eat">Не ем</label>
                    <input id='choice' type="checkbox" className="choice" defaultChecked />
                    <label htmlFor='choice' className="eat">Ем</label>
                </div>
            </header>
        )
    }
}