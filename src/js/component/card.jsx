import React from "react";
import PropTypes from"prop-types";

const Card = (props) => {
    return (
        <div className="card mx-3 boder-2" >
            <img src={props.image} className="card-img" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                
                <div className="card-footer">
                    <a href="#" className="button btn">{props.buttonLabel}</a>
                </div>
        </div>
    );
};

Card.propTypes= {
    image:PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonLabel: PropTypes.string,
};


export default Card;