import React, { Component } from 'react';
import abuGhraibg from './images/abuGhraib.jpeg';
import kosovarAlbanians from './images/kosovarAlbanians.jpeg';
import napalmGirl from './images/napalmGirl.jpeg';
import simonSchamaPicasso from './images/simonSchamaPicasso.jpeg';
import twoBangladeshiBoys from './images/twoBangladeshiBoys.jpeg';
import quotes from './quotes.json';
import './Content.css';

class Content extends Component {

    constructor(props){
        super(props);
        
        // The data that will be displayed on the page
        this.quotes = quotes;
        this.images = [
            abuGhraibg,
            kosovarAlbanians,
            napalmGirl,
            simonSchamaPicasso,
            twoBangladeshiBoys
        ]
        this.currentIndex = 0; //Math.floor(Math.random() * this.images.length);
    }


    render(){
        return (
            <div className="tiles">
                <div className="tile">
                    <blockquote>"{this.quotes[this.currentIndex][0].quote}"</blockquote>
                    <div className="">

                    </div>
                    {this.quotes[this.currentIndex][0].name}
                </div>
                <div class="tile">
                    <blockquote>"{this.quotes[this.currentIndex][1].quote}"</blockquote>
                    {this.quotes[this.currentIndex][1].name}
                </div>
                <div class="tile">
                    <blockquote>"{this.quotes[this.currentIndex][2].quote}"</blockquote>
                    {this.quotes[this.currentIndex][2].name}
                </div>
                <div class="tile">
                    <img src={this.images[this.currentIndex]} alt={this.images[this.currentIndex]}/>
                </div>
                <div class="tile">
                    <blockquote>"{this.quotes[this.currentIndex][3].quote}"</blockquote>
                    {this.quotes[this.currentIndex][3].name}
                </div>
                <div class="tile">
                    <blockquote>"{this.quotes[this.currentIndex][4].quote}"</blockquote>
                    {this.quotes[this.currentIndex][4].name}
                </div>
            </div>  
        );
    }
}

export default Content;