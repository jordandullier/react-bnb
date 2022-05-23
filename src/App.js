import "./style.css"
import React from "react";
import Nav from "./components/Nav"
import Hero from "./components/Hero";

export default function App(){
    return(
        <main>
            <Nav/>
            <Hero/>
        </main>
    )
}