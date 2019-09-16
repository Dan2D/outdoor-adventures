import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
    const DETAIL = 'detail';
    const REVIEW = 'review';
    return (
        <div className={`card-container card-container--${props.type}`}>
            <div className={`card__top card__top--${props.type}`}
            style={{
            background: `${props.type !== REVIEW ? "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(" + require("../images/" + props.bg + "-bg.jpg") + ")" : "white"}`,
            backgroundSize: 'cover',
            backgroundPosition: 'top'
            }}>
                <div className='card__top-txt'>
                    {props.price && <p>${props.price}</p>}
                    <h4 className='card__title'>{props.cardTitle}</h4>
                </div>
                {props.type !== REVIEW ? (
                <Link className={`card__btn card__btn--${props.type} btn`} to="/">
                    Learn More
                </Link>) : (
                <>
                    <p className='review-txt'>{props.reviewTxt}</p>
                    <p className='review-name'>-{props.userName}</p>
                </>
                )}
            </div>
            {props.type === DETAIL && (
            <div className={`card__bottom card__bottom--${props.type}`}>
                <p>{props.detailTxt}</p>
            </div>
            )}
        </div>
    )
}

export default Card
