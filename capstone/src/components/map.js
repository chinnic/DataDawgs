import React from 'react';

export default function map(props) {

    return (
        <div className='map-container' id='interactive-map'>
            <h1>
                Test Map Embed
            </h1>
            <iframe id='tableau' title='map' src='https://public.tableau.com/views/geofilter/Sheet2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true' />
            
        </div>
    );
    
};