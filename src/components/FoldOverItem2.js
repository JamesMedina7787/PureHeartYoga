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
height: '85%'
}

class FoldOverItem2 extends Component {
    render() {

      return (
        <div className="linksContainerLocations">
        <a  href={Linkies.instagram} alt="Gia Gianina Pure Heart Yoga Porfolio">
         <img  style = {Images} className="socialLinks" src={ig}/><br/>
          <br />
            <br/>
         </a><br/>
         <a href={Linkies.facebook} alt="Gia Gianina Pure Heart Yoga Porfolio">
          <img style = {Images} className="socialLinks" src={fb}/><br/>
           <br />
             <br/>
          </a>

        </div>
      );
    }
  }

export default FoldOverItem2;
