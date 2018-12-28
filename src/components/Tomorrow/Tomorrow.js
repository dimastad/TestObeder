import React, { Component } from 'react';
import Menu from "../Menu/Menu";
import Button from "../Button/Button";


let date = new Date();
let weekDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
"Суббота"];
let month = ["января", "февраля", "марта", "апреля", "мая", "июня", 
	"июля", "августа", "сентября", "октября", "ноября", "декабря" ];

export default class Tomorrow extends Component {
    render() {
        return (
            <div>
                <h2 className="blockTitle">
                    {weekDay[date.getDay() + 1]}, {date.getDate() + 1} {month[date.getMonth()]}
                    
                </h2>
                <div className="menuWrapper">
                    <Menu menuheader="Салаты" id1="salad-t" dish1="Нежный" id2="vinegret-t" dish2="Винегрет овощной со свежими овощами" />
                    <Menu menuheader="Супы" id1="shee-t" dish1="Щи щецкие по щщам дающие на серьезных щщах" id2="borsh-t" dish2="Борщ с галушками" />
                    <Menu menuheader="Гарниры" id1="paste-t" dish1="Макарохи" id2="reeze-t" dish2="Рис-хуис" />
                    <Menu menuheader="Мясо" id1="sausages-t" dish1="Сосиски немецкие с сыром, приправами, чесноком и базиликом" id2="kupaty-t" dish2="Купаты куптельные" />
                    <Menu addClass="disabled" menuheader="Вторые блюда" id1="karbonara-t" dish1="Уберкарбонара с соусом из усов шанхайского барса" id2="ravioly-t" dish2="Пельмени зачотные" />
                    <Button buttonText="Сбросить в дефолт!"/>
                </div>
            </div>
        )
    }
}