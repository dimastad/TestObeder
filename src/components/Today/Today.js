import React, { Component } from 'react';
import './Today.css';
import Menu from "../Menu/Menu";
import Button from "../Button/Button";


let date = new Date();
let weekDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
"Суббота"];
let month = ["января", "февраля", "марта", "апреля", "мая", "июня", 
	"июля", "августа", "сентября", "октября", "ноября", "декабря" ];

export default class Today extends Component {

    render() {
        return (
            <div>
                <h2 className="blockTitle">
                    {weekDay[date.getDay()]}, {date.getDate()} {month[date.getMonth()]}
                </h2>
                <form className="menuWrapper">
                    <Menu menuheader="Салаты" id1="salad" dish1="Нежный" id2="vinegret" dish2="Винегрет овощной со свежими овощами" />
                    <Menu menuheader="Супы" id1="shee" dish1="Щи щецкие по щщам дающие на серьезных щщах" id2="borsh" dish2="Борщ с галушками" />
                    <Menu menuheader="Гарниры" id1="paste" dish1="Макарохи" id2="reeze" dish2="Рис-хуис" />
                    <Menu menuheader="Мясо" id1="sausages" dish1="Сосиски немецкие с сыром, приправами, чесноком и базиликом" id2="kupaty" dish2="Купаты куптельные" />
                    <Menu addClass="disabled" menuheader="Вторые блюда" id1="karbonara" dish1="Уберкарбонара с соусом из усов шанхайского барса" id2="ravioly" dish2="Пельмени зачотные" />
                    <Button type="reset" buttonText="Сбросить в дефолт!" />
                    <br/>
                    <br/>
                    <br/>
                </form>
            </div>
        )
    }
}