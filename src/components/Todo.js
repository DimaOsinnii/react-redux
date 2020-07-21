import React from "react";

export const Todo = ({onClick, completed, text}) => (
    <li onClick={onClick}
        style={{
            textDecoration:
                completed ?
                    'line-through' :
                    'none'
        }}
    >
        {text}
        {console.log(completed)}
    </li>
);