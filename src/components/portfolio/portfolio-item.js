import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.url}</p>

            <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    );
}