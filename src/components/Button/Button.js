import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        const{
            type,
            buttonText
        } = this.props;
        return (
            <button type={type} className="btn btn-primary">
                {buttonText}
            </button>
        )
    }
}