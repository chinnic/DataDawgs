/* eslint-disable */
import React from 'react';
import logo from '../images/pup.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function splash (props) {
  return (
        <div>
            <h1 className="title">DataDawgs</h1>
            <img src={logo}></img>
            <h1 className="section">About</h1>
            <div className="description">
                <p>We have a world of resources, and there are many innovators around the world, but there are many resources not used effectively. While many organizations exist to address public interest and social good issues, there is a disconnect between those looking for resources and organizations that provide them. Given the overwhelming amount of resources and organizations in existence it can feel impossible to know where to start when looking for tools that fit your needs. The NewImpact Wiki serves as a free open online directory of companies, non profit organizations, government agencies and others that have resources and tools involved in various impact areas.</p>
            </div>
            <h1 className="section">Key Features</h1>
            <div className="description">
            <p>Search & Filter, Geo-mapped Resources, Export & Share Data</p>
            </div>
            <h1 className="section">Demo Video</h1>
            <div className="description">
              <p>*Update with New Demo</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UFmnwAmv7vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h1 className="section">Team</h1>
            <div className="description">
              <p>Alicia Chen Nic Chin David Xie Justin Zhu</p>
            </div>
            <h1 className="section">Project Status</h1>
            <div className="description">
              <p>Project is being handed off to NewImpact after Spring 2023!</p>
            </div>
          <Button className='start'><Link to='/home'> Try It Out! </Link></Button>
        </div>
  )
}
