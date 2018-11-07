import React from 'react';
import '../App.scss';
import PropTypes from 'prop-types';

const Card = function({property}){
    const {index, title, description, picture} = property;
    return(
        <div className='card_wrapper' id={index} >
            <img className="card_picture" src={picture} alt="movie"/>
            <div className="card_text">
                <h2 className="card_title">{title}</h2>
                <p className="card_description">{description}</p>
                <div className="cardLinks">
                    <a className="BuyNow" href="https://www.google.com/"></a>
                    <a className="WatchTrailer" href="https://www.google.com/">Watch Trailer</a>
                </div>
            </div>
            
        </div>
    );
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
