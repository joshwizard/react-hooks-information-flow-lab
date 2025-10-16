import React, { useState } from "react";

function Header({onDarkModeClick}) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    function handleClick() {
        const newMode = !isDarkMode
            setIsDarkMode(newMode)

            if (onDarkModeClick) {
                onDarkModeClick(newMode)
            }
        }
    
    return (
        <header>
            <h1>Shopster</h1>
            <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "dark Mode"}</button>
        </header>
    )
}

export default Header