import React from "react"
import Hero from "./components/Hero"
import Main from "./components/Main"
import data from "./data"

export default function App(){

    const locations = data.map((location) => {
    
        return (
            <Main
                key={location.id}
                location={location}
            />
        )
    })
   return (
        <div>
            <Hero />
            <section>
                {locations}
            </section>
        </div>
    )
}