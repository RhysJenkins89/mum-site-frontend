import React, { useState } from "react"
import styles from "../styles/Nav.module.css"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={styles.mainNav}>
            {/* Main logo */}
            <div className={styles.logoContainer}>
                <h1>Storytelling for all</h1>
            </div>

            {/* Items container */}
            <div className={styles.itemsContainer}>
                <p>About</p>
                <p>Gallery</p>
                <p>Contact</p>
                <p>Item four</p>
                <p>Item five</p>
            </div>

            {/* Hamburger menu */}
            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? styles.isOpen : ""}></span>
                <span className={isOpen ? styles.isOpen : ""}></span>
                <span className={isOpen ? styles.isOpen : ""}></span> 
            </div>

            {/* Overlay */}
            <div className={`${styles.overlay } ${isOpen && styles.isOpen}`}></div>
        </nav>
    )
}

export default Nav