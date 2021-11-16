import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <img src="/images/yourmovies3.png"/>
            </div>
            <div className="login">
                <button> <a href="" className="login">login</a> </button>
            </div>
        </header>
    )
}
