import "./style.css"
import React from "react";
import Nav from "./components/Nav"
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from './data'

export default function App(){

    const activities = data.map((activity)=>{
        return (
            <Card
                key={activity.id} 
                activity={activity}
                // Spread syntax => create n props coresponding to our object
                // {...activity}
            />
        )
    })

    return(
        <main>
            <Nav/>
            <Hero/>
            <div className="card--container">
                {activities}
            </div>
           
        </main>
    )
}