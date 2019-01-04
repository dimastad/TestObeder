import React, { Component } from 'react';
import logo from "../../logo.svg";
import Button from "../Button/Button";
import "./EntryForm.css";

export default class EntryForm extends Component {
    render() {
        return (
            <div className="EntryFormWrapper" hidden>
                <form className="form-signin">
                    <img src={logo} className="mb-3" alt="logo" width="160" height="160" />
                    <h1 className="h1 logo-title mb-5">obeder</h1>
                    <input type="email" class="inputForm mb-3" placeholder="Электропочта" required ></input>
                    <input type="password" class="inputForm mb-5" placeholder="Кодовое слово" required ></input>
                    <Button type="submit" buttonText="Обедать!" />
                    <span className="entryFormInfo">Крайне мелкий текст поясняющий магические особенности входа или регистрации</span>
                </form>
            </div>
            
        )
    }
}