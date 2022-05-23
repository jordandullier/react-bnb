import React from "react";
import photoGrid from "../images/photo-grid.png"

export default function Hero(){
    return (<section className="hero">
                <img src={ photoGrid } className="photo--grid"/>
                <h1>Expériences en ligne</h1>
                <p>Participez à des activités uniques. Et cela près de chez vous!
                    Alors n'attendez plus...
                </p>
            </section>
        )
}
