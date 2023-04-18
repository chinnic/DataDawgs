import React from 'react';
import logo from '../images/logo.png';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function splash(props) {

    return (
        <div>
            <h1>
                Splash!
            </h1>
            <img src={logo}></img>

            <Button className='start'><Link to='/home'> Get Started! </Link></Button>
        </div>
        
    );
    
};