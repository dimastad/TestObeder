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
                    {weekDay[date.getDay()]},&nbsp;
                    <span className="d-md-inline d-none">сегодня,&nbsp;</span>
                    {date.getDate()}&nbsp;
                    {month[date.getMonth()]}
                </h2>
                <form className="menuWrapper">
                    <Menu theClass="menu span-3" menuheader="Салаты" id1="salad" dish1="Нежный" id2="vinegret" dish2="Винегрет овощной со свежим горошком"/>
                    <Menu theClass="menu span-4" menuheader="Мясо"  id1="kupaty" dish1="Купаты куптельные" id2="sausages" dish2="Сосиски немецкие с сыром, приправами, чесноком и базиликом"/>
                    <Menu theClass="menu span-4" menuheader="Супы" id1="borsh" dish1="Борщ с галушками" id2="shee" dish2="Щи щецкие по щщам дающие на серьезных щщах"  />
                    <Menu theClass="menu span-3" menuheader="Гарниры" id1="reeze" dish1="Рис-хуис" id2="paste" dish2="Макарохи" />
                    <Menu theClass="menu span-4" menuheader="Вторые блюда" id1="karbonara" dish1="Уберкарбонара с соусом из усов шанхайского барса" id2="ravioly" dish2="Пельмени зачотные" lock="disabled"/>
                    <div className="span-4">
                        <textarea className="restangle"></textarea>
                        <Button type="reset" buttonText="Сбросить в дефолт!" />
                    </div>
                    
                </form>
            </div>
        )
    }
}