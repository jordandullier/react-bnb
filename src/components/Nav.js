import React from "react"
import logo from "../images/airbnb-logo.png"

export default function Nav(){
    return(
        <nav>
            <img alt="Logo" src={ logo } className="nav--logo"/>
        </nav>
    )
}