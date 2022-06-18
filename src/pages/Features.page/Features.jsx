import React from 'react';
import "../Features.page/Features.css"

const Features = () => {
    return (
        <div className='main_conteiner'>
            <h1>Чем можно заниматься в интукоде?</h1>
            <ul className='list'>
                <li>Кайфовать</li>
                <li>Наводить суету</li>
                <li>Кодить и играть в мафию</li>
            </ul>
        </div>
    );
};

export {Features}