import React from 'react';
import Map from '../components/map.js';
export default function home(props) {

    return (
        <div>
            <h1>
                Home !
            </h1>
            <p>The NewImpact Wiki is a free online directory of resources in your impact area. 
                The unique dataset provided by NewImpact allows you to explore through various modes and filters!
            </p>
            <Map></Map>
        </div>
    );
    
};