import React from "react";
import "./Card.css";

export default (props) => {
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="Card">
            <div className="Title" style={cardStyle}>{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>

    );

};