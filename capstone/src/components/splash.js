import React from 'react';
import logo from '../images/pup.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function splash(props) {

    return (
        <div>
            <h1>DataDawgs</h1>
            <img src={logo}></img>
            <h1>About</h1>
            <p>We have a world of resources, and there are many innovators around the world, but there are many resources not used effectively. While many organizations exist to address public interest and social good issues, there is a disconnect between those looking for resources and organizations that provide them. Over 1.5 million nonprofits are registered with the Internal Revenue Service, given the overwhelming amount of resources and organizations in existence it can feel impossible to know where to start when looking for tools that fit your needs. The NewImpact Wiki serves as a free open online directory of companies, non profit organizations, government agencies and others that have resources and tools involved in various impact areas.</p>
            <h1>Key Features</h1>
            <p>Search & Filter, Geo-mapped Resources, Export & Share Data</p>
            <h1>Demo Video</h1>
            <p>*Update with New Demo</p>
            <iframe src="https://youtu.be/UFmnwAmv7vc"></iframe>
            <h1>DataDawgs Team</h1>
            <p>Alicia Chen Nic Chin David Xie Justin Zhu</p>
            <h1>Project Status</h1>
            <p>Project is being handed off to NewImpact after Spring 2023!</p>
          <Button className='start'><Link to='/home'> Try It Out! </Link></Button>
        </div>


    );
    
};