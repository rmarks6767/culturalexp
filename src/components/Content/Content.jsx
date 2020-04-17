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
        this.state = {
            elements: [],
            visible: false,
            currentIndex: Math.floor(Math.random() * 5)
        }
        this.changeImage();
    }

    componentDidMount() {
        // The time before each image will change
        this.timerID = setInterval(
          () => this.changeImage(),
          15000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeImage(){
        this.setState({
            visible: false,
        });

        var data = {
            quotes: quotes,
            images: [
                abuGhraibg,
                kosovarAlbanians,
                napalmGirl,
                simonSchamaPicasso,
                twoBangladeshiBoys
            ]
        }

        var nextIndex = (this.state.currentIndex + 1) % 5;

        var picLocation = Math.floor(Math.random() * 6);
        var newList = [];
        var g = 0;

        for(var i = 0; i < 6; i++){
            var element = null;
            if (i !== picLocation){
                element = 
                <div>
                    <i>"{data.quotes[nextIndex][g].quote}"</i>
                    <br></br>
                    <br></br>
                    <i>&mdash;&nbsp;{data.quotes[nextIndex][g].name}</i>
                </div>
                g++;
            }
            else {
                element = 
                <div> 
                    <img src={data.images[nextIndex]} alt={data.images[nextIndex]}/>
                </div>
            }
            newList.push(element);
        }

        setTimeout(() => {
            this.setState({
              visible: true,
              currentIndex: nextIndex,
              elements: newList
            });
          }, 2000);    
        }

    render(){
        return (
            <div className="stuff">
                <div className="tiles">
                    <div className="tile">
                        <div className={ this.state.visible? 'tile-fadeIn':'tile-fadeOut'}> 
                            { this.state.elements[0] }
                        </div>
                    </div>
                    <div className="tile">
                        <div className={ this.state.visible? 'tile-fadeIn':'tile-fadeOut'}> 
                            { this.state.elements[1] }
                        </div>
                    </div>
                    <div className="tile">
                        <div className={ this.state.visible? 'tile-fadeIn':'tile-fadeOut'}> 
                            { this.state.elements[2] }
                        </div>                    
                    </div>
                    <div className="tile">
                        <div className={ this.state.visible? 'tile-fadeIn':'tile-fadeOut'}> 
                            { this.state.elements[3] }
                        </div>                   
                    </div>
                    <div className="tile">
                        <div className={ this.state.visible? 'tile-fadeIn':'tile-fadeOut'}> 
                            { this.state.elements[4] }
                        </div>                    
                    </div>
                    <div className="tile">
                        <div className={ this.state.visible? 'tile-fadeIn':'tile-fadeOut'}> 
                            { this.state.elements[5] }
                        </div>                    
                    </div>
                </div>  
            </div>
        );
    }
}

export default Content;