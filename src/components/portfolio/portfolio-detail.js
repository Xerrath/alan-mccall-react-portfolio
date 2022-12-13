import React from 'react';

export default function(porps) {
    return (
        <div>
            <h2>Portfolio Detail {porps.match.params.slug}</h2>
        </div>
    );
}