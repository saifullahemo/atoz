import React from 'react'

const STYLES = [
    "btn--primary-solid",
    "btn--primary-outline"
];

const SIZES = ["btn--medium", "btn--large"];

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    
    // check button style
    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];

    // check button size
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    return(
        <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick} 
        type={type}>
            {children}
        </button>
    )
}