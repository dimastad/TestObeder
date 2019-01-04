import React, { Component } from 'react';
import './Menu.css';
import "bootstrap/dist/css/bootstrap.css";

export default class Menu extends Component {
    render() {
        const{
            lock,
            menuheader,
            id1,
            dish1,
            id2,
            dish2
        } = this.props;
        return (
            <fieldset className="menu" disabled={lock}>
                <h4>{menuheader}</h4>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <input id={id1} type="checkbox" className="menu__checkbox_hidden"></input>
                        <label className="menu__checkbox mr-3" htmlFor={id1}></label>
                        <label className="menu__checkbox-label" htmlFor={id1}>{dish1}</label>
                    </li>
                    <li className="menu__list-item">
                        <input id={id2} type="checkbox" className="menu__checkbox_hidden"></input>
                        <label className="menu__checkbox mr-3" htmlFor={id2} ></label>
                        <label className="menu__checkbox-label" htmlFor={id2}>{dish2}</label>
                    </li>
                </ul>
            </fieldset>
        )
    }
}