import React, { Component } from 'react';
import Menu from "../Menu/Menu";
import Button from "../Button/Button";


let date = new Date();
let weekDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let month = ["января", "февраля", "марта", "апреля", "мая", "июня", 
    "июля", "августа", "сентября", "октября", "ноября", "декабря" ];
var tomorrow = new Date(date.getTime()+1000*60*60*24);

export default class Tomorrow extends Component {
    render() {
        return (
            <div className="pt-5">
                <h2 className="blockTitle">
                    {weekDay[tomorrow.getDay()]},&nbsp;
                    <span className="d-md-inline d-none">завтра,&nbsp;</span>
                    {tomorrow.getDate()}&nbsp;
                    {month[tomorrow.getMonth()]}
                    
                </h2>
                <form className="menuWrapper">
                    <Menu theClass="menu span-3" menuheader="Салаты" id1="salad-t" dish1="Нежный" id2="vinegret-t" dish2="Винегрет овощной со свежими овощами" />
                    <Menu theClass="menu span-4" menuheader="Мясо" id1="sausages-t" dish1="Сосиски немецкие с сыром, приправами, чесноком и базиликом" id2="kupaty-t" dish2="Купаты куптельные" />
                    <Menu theClass="menu span-4" menuheader="Супы" id1="shee-t" dish1="Щи щецкие по щщам дающие на серьезных щщах" id2="borsh-t" dish2="Борщ с галушками" />
                    <Menu theClass="menu span-3" menuheader="Гарниры" id1="paste-t" dish1="Макарохи" id2="reeze-t" dish2="Рис-хуис" lock="disabled" />
                    
                    <Menu theClass="menu span-4" menuheader="Вторые блюда" id1="karbonara-t" dish1="Уберкарбонара с соусом из усов шанхайского барса" id2="ravioly-t" dish2="Пельмени зачотные" />
                    <div className="span-4">
                        <div className="restangle"></div>
                        <Button type="reset" buttonText="Сбросить в дефолт!" />
                    </div>
                </form>
            </div>
        )
    }
}