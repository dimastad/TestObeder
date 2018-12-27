import React, { Component } from 'react';
import './Day.css';
import Menu from "../Menu/Menu";


let date = new Date();
let weekDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
"Суббота"];
let month = ["января", "февраля", "марта", "апреля", "мая", "июня", 
	"июля", "августа", "сентября", "октября", "ноября", "декабря" ];

export default class Day extends Component {
    render() {
        return (
            <div>
                <h2 className="blockTitle">
                    {weekDay[date.getDay()]}, {date.getDate()} {month[date.getMonth()]}
                </h2>
                <Menu menuheader="Салаты" id1="salad" dish1="Нежный" id2="vinegret" dish2="Винегрет овощной со свежими овощами" />
                <Menu menuheader="Супы" id1="shee" dish1="Щи щецкие по щщам дающие на серьезных щщах" id2="borsh" dish2="Борщ с галушками" />
                <Menu menuheader="Гарниры" id1="paste" dish1="Макарохи" id2="reeze" dish2="Рис-хуис" />
            </div>
        )
    }
}