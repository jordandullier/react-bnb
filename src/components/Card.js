import React from "react";

export default function Card(props){
    console.log(props.activity)
    let badgeText
    if(props.activity.openSpots===0){
        badgeText = "EPUISE"
    }else{
        badgeText = "DISPONIBLE"
    }

    return(
        <div className="card">
            <div className="activity--status">
                {badgeText} 
            </div>
            <img src={`../images/${props.activity.coverImg}`} alt="" className="card--photo"/>
            <div className="note--info">
                <img src={"../images/star.png"} alt="" className="star--photo"/>
                <span className="average--note">{props.activity.stats.rating}</span> 
                <span className="number--note">
                    ({props.activity.stats.reviewCount}) - {props.activity.location}
                </span>
            </div>
            <div className="activity--title">
                {props.activity.title}
            </div>
            <div className="activity--price">
                <strong>A partir de {props.activity.price}€ </strong>/ personne
            </div>
        </div>
    )
}
