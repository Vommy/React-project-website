import { React } from 'react';

/**
 * Defines a reusable button component with different text, colors and onclicks.
 * @param {*} param0 
 * @returns The button component.
 */
const Button = ({buttonText, buttonColor, onClick}) => {
    return (
        <button className={'btn btn-'+ buttonColor} onClick={onClick}>{buttonText}</button>
    );
}

export default Button;
