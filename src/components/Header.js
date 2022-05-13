import React from "react"
import '../assets/Header.css'
import memeLogo from '../assets/meme.png'
export default function Header() {
    return (
        <header className="header">
            <img 
                src={memeLogo}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}