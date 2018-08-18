import React from "react";

export default ({ type, content }) => (
    <div className='loader'>
        <div className="body">
            <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div className="base">
                <span></span>
                <div className="face"></div>
            </div>
        </div>
        <div className="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h1>В Пути...</h1>
    </div>
);
