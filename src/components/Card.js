import React from "react";

export default function Card(props){
    let badgeText
    if(props.openSpots===0){
        badgeText = "EPUISE"
    }else{
        badgeText = "DISPONIBLE"
    }

    return(
        <div className="card">
            {badgeText && <div className="activity--status">{badgeText}</div>}
            <img src={`../images/${props.img}`} className="card--photo"/>
            <div className="note--info">
                <img src={"../images/star.png"} className="star--photo"/>
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