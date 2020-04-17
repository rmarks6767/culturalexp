import React, { Component } from 'react';
import GithubLogo from './github.svg';
import Card from 'react-bootstrap/Card'
import './Footer.css';

class Footer extends Component {
    render(){
        return (
            <div className="Footer">
                <div className="author">
                    <p className="author-name">Site created by River Marks</p>
                </div>
                <div className="links">
                    <a href="https://github.com/rmarks6767/culturalexp" className="github">
                        <p className="githubLink">Check out this site out on Github!</p>
                        <img id='github-logo' src={GithubLogo} alt='Github logo'/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;