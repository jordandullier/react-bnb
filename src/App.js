import "./style.css"
import React from "react";
import Nav from "./components/Nav"
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App(){
    return(
        <main>
            <Nav/>
            <Hero/>
            <div className="card--container">
                <Card img="street-one.png" rating={5.0} reviewCount={6} country='FRA' title="Découvrez l'Alsace sous un autre angle" price={120}/>
                <Card img="forest-one.png" rating={4.7} reviewCount={13} country='FRA' title="Empruntez les sentiers du Jura" price={97.25}/>
            </div>
           
        </main>
    )
}