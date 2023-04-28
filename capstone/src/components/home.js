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
            <p>
                Familiar with Kibana? Visit our Kibana dashboard <a href="https://wiki.newimpact.care/login?next=%2F#?_g=()" target="_blank">here</a>!
            </p>
            <Map></Map>
        </div>
    );
    
};