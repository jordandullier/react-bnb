import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div className="activity--status">
                EPUISE 
            </div>
            <img src={require(`../images/${props.img}`)} className="card--photo"/>
            <div className="note--info">
                <img src={require("../images/star.png")} className="star--photo"/>
                <span className="average--note">{props.rating}</span> 
                <span className="number--note">
                    ({props.reviewCount}) - {props.country}
                </span>
            </div>
            <div className="activity--title">
                {props.title}
            </div>
            <div className="activity--price">
                <strong>A partir de {props.price}€ </strong>/ personne
            </div>
        </div>
    )
}