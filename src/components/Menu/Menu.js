import React, { Component } from 'react';
import './Menu.css';
import "bootstrap/dist/css/bootstrap.css";

export default class Menu extends Component {
    render() {
        const{
            menuheader,
            id1,
            dish1,
            id2,
            dish2
        } = this.props;
        return (
            <div className="menu">
                <h4>{menuheader}</h4>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <input id={id1} type="checkbox" className="menu__checkbox_hidden"></input>
                        <span className="menu__checkbox" ></span>
                        <label htmlFor={id1}>{dish1}</label>
                    </li>
                    <li className="menu__list-item">
                        <input id={id2} type="checkbox" className="menu__checkbox_hidden" defaultChecked></input>
                        <span className="menu__checkbox" ></span>
                        <label htmlFor={id2}>{dish2}</label>
                    </li>
                </ul>
            </div>
        )
    }
}