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
                img={activity.coverImg} 
                rating={activity.stats.rating} 
                reviewCount={activity.stats.reviewCount} 
                country={activity.location.slice(0,3).toUpperCase()} 
                price={activity.price} 
                title={activity.title}
                openSpots={activity.openSpots}
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