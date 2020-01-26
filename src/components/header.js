import React from 'react';
import '../assets/css/header.css';
export const Header = props => {
    return(
        <div className="header">
            <h2>
            {props.title}
            </h2>
        </div>
    )
}