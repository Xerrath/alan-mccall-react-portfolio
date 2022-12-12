import React from 'react';

export default function(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.url}</p>
        </div>
    );
}