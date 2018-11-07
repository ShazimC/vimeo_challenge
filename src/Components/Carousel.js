import React, { Component } from 'react';
import Carousel_Card from './Carousel_Card';
import data from '../data/data.js';
import '../App.js';
import '../App.scss';

class Carousel extends Component{

    constructor(props){
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }

    nextProperty = function() {
        const newIndex = this.state.property.index+1;
        this.setState(
            {property: data.properties[newIndex]}
        )
        document.getElementById("Carousel_BG").style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('" + this.state.properties[newIndex].picture + "') no-repeat center";
        document.getElementById("Carousel_BG").style.backgroundSize = "cover";

    }
    prevProperty = function(){
        const newIndex = this.state.property.index-1;
        this.setState(
            {property: data.properties[newIndex]}
        )
        document.getElementById("Carousel_BG").style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('" + this.state.properties[newIndex].picture + "') no-repeat center";
        document.getElementById("Carousel_BG").style.backgroundSize = "cover";
    }

    

    render(){
        const {property} = this.state;
        return(
            <div id="Carousel_Wrapper">
                <div id="Carousel_BG"></div>

                <button className="prevButton" onClick={() => this.prevProperty()} 
                disabled={property.index === 0}
                >&lsaquo;</button>
           
                <Carousel_Card property={property} />

                <button className="nextButton" onClick={() => this.nextProperty()} 
                disabled={property.index === data.properties.length-1} 
                >&rsaquo;</button>
                
            </div>  
        );
    }
}

export default Carousel;