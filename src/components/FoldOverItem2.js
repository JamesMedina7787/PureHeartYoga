import React, { Component } from 'react';
import ig from "../pictures/ig.png"
import fb from "../pictures/fb.jpg"

const Linkies = {
  'instagram' : "https://www.instagram.com/bxbellaitaliana",
  'facebook'  : "https://www.facebook.com/PureHeartYoga.net",
  'style':'maxWidth : 100%',
}

const Images = {
  flex:'1',
  backgroundColor: 'black',
  zIndex: '1',
  width:'25%',
height: '85%',
alt: "Pure Heart Yoga instagram",
alt2: "Pure Heart Yoga Facebook"
}

class FoldOverItem2 extends Component {
    render() {

      return (
        <div className="linksContainerLocations">
        <a  href={Linkies.instagram}>
         <img  style = {Images} className="socialLinks" src={ig} alt={Images.alt}/><br/>
          <br />
            <br/>
         </a><br/>
         <a href={Linkies.facebook} alt="Gia Gianina Pure Heart Yoga instagram">
          <img style = {Images} className="socialLinks" src={fb} alt={Images.alt2}/><br/>
           <br />
             <br/>
          </a>

        </div>
      );
    }
  }

export default FoldOverItem2;
