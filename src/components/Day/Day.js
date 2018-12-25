import React, { Component } from 'react';
import './Day.css';


let date = new Date();
let weekDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
"Суббота"];
let month = ["январь", "февраль", "март", "апрель", "май", "июнь", 
	"июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь" ];

export default class Day extends Component {
    render() {
        return (
            <h1 className="blockTitle">
                {weekDay[date.getDay()]}, {date.getDate()} {month[date.getMonth()]}
            </h1>
        )
    }
}