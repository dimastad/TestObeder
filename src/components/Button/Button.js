import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        const{
            buttonText
        } = this.props;
        return (
            <button type="button" className="btn btn-primary">
                {buttonText}
            </button>
        )
    }
}