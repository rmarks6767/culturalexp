
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.setLinkActive = this.setLinkActive.bind(this);
    }
    render(){
        return (
            <nav className="Navbar">
                <div className="collapse navbar-colapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}