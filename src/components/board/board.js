import React from 'react';
import css from './board.module.scss';
import PicturesMain from './prokat-velosipedov.png';

export const Board = () => {
    return (
        <div className={css.board}>
            <p>Потеряли велосипед?</p>
            <span>Мы поможем его найти</span>
            <img src={PicturesMain}/>
        </div>
        
        
        
    )
}