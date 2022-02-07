import React from 'react'
import Hero from '../components/Hero/Hero'
import Service from '../components/Services/service'
import Projects from '../components/projects/projects'
import Development from '../components/Development/Development'
import Technology from '../components/Technology/Tech'

export default function Home() {
    return (
        <>
            <Hero />
            <Service />
            <Development />
            <Projects />
            <Technology />
            
        </>
    )
}
