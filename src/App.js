import React, { Component } from 'react'; 
import Carousel from './Components/Carousel';
import data from './data/data.js';
import './App.scss';

function SectionText(props){
  return(
    <p className="sectionText" id={props.id}>
      <h2 className="title" id={props.id}>{props.title}</h2>
      <span className="description" id={props.id}>{props.desc}</span>
    </p>
  );
}

function Section(props){
  var imagePos = props.imgPos;

  if(imagePos === "right"){
    return(
      <div className="section" id={props.id}>
        <SectionText id={props.id} title={props.title} desc={props.desc}/>
        <img className="sectionImage"
            id = {props.id}
            src = {props.imgURL}
            alt = {props.alt}
            />
      </div>
    );
  }else{
    return(
      <div className="section" id={props.id}>
        <img className="sectionImage"
          id = {props.id}
          src = {props.imgURL}
          alt = {props.alt}
        />
        <SectionText id={props.id} title={props.title} desc={props.desc}/>
      </div>
    );
  }
  
}

const topTitle = "MONSOON III";
const midTitle = "BEAMS";
const botTitle = "Move 2";
const desc = (
  "Lorem ipsum dolor sit amet, consectetur adipiscing elt. "+
  "Donec tincidut ipsum augue. "+ 
  "in faucibus vehicula magna pulvinar aliquam. "+
  "Cras aliquam feugiat lorem non auctor. "+
  "Quisque sed lorem egestas mauris venenatis commodo eu id nibh. "+
  "Ut porta libero sed semper faucibus."
);
const topImgURL = "https://i.vimeocdn.com/video/595198868_505x160.jpg";
const midImgURL = "https://i.vimeocdn.com/video/589972810_530x315.jpg";
const botImgURL = "https://i.vimeocdn.com/video/590587169_530x315.jpg";

class App extends Component{
  render(){
    return(
      <div id="main">
        <Section id="top" title={topTitle} desc={desc} imgURL={topImgURL} imgPos="left"/>
        <Section id="mid" title={midTitle} desc={desc} imgURL={midImgURL} imgPos="right"/>
        <Section id="bot" title={botTitle} desc={desc} imgURL={botImgURL} imgPos="left"/>
        <Carousel />
      </div>
    );
  }
}

export default App;
